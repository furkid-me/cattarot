// 手勢偵測增強版 - 加入左右搖晃偵測
let shakeHistory = [];
const SHAKE_THRESHOLD = 0.15; // 搖晃門檻
const SHAKE_TIME_WINDOW = 800; // 800ms內偵測搖晃

function detectShakeGesture(handX) {
    const currentTime = Date.now();

    // 添加當前位置到歷史
    shakeHistory.push({ x: handX, time: currentTime });

    // 移除超過時間窗口的歷史記錄
    shakeHistory = shakeHistory.filter(h => currentTime - h.time < SHAKE_TIME_WINDOW);

    if (shakeHistory.length < 3) return false;

    // 檢測左右搖晃：在短時間內X坐標有明顯的左右變化
    let directionChanges = 0;
    for (let i = 1; i < shakeHistory.length; i++) {
        const delta = shakeHistory[i].x - shakeHistory[i - 1].x;
        if (Math.abs(delta) > SHAKE_THRESHOLD) {
            // 檢查方向是否改變
            if (i > 1) {
                const prevDelta = shakeHistory[i - 1].x - shakeHistory[i - 2].x;
                if ((delta > 0 && prevDelta < 0) || (delta < 0 && prevDelta > 0)) {
                    directionChanges++;
                }
            }
        }
    }

    // 如果有2次以上的方向改變，視為搖晃
    return directionChanges >= 2;
}

// 添加到 handleGesture 函數中
function handleGestureEnhanced(gesture, landmarks) {
    const currentTime = Date.now();

    if (gesture !== lastGesture) {
        lastGesture = gesture;
        gestureStartTime = currentTime;
    }

    const gestureStableTime = currentTime - gestureStartTime;
    if (gestureStableTime < 500) {
        return;
    }

    // 檢測單指（食指）伸出的搖晃手勢
    const fingers = {
        thumb: isFingerExtended(landmarks, 4, 3, 2),
        index: isFingerExtended(landmarks, 8, 7, 6),
        middle: isFingerExtended(landmarks, 12, 11, 10),
        ring: isFingerExtended(landmarks, 16, 15, 14),
        pinky: isFingerExtended(landmarks, 20, 19, 18)
    };

    const extendedCount = Object.values(fingers).filter(v => v).length;

    // 單指搖晃（食指伸出）
    if (extendedCount === 1 && fingers.index && isCardDrawn) {
        const handX = landmarks[8].x; // 食指尖端
        if (detectShakeGesture(handX)) {
            slideAwayCard();
            shakeHistory = []; // 清空歷史
            return;
        }
    }

    if (gesture === 'open' && !isDrawing && !isCardDrawn) {
        updateGestureStatus('👋', '移動手掌選擇卡片');
    } else if (gesture === 'fist' && !isDrawing && !isCardDrawn && selectedCardIndex !== null) {
        updateGestureStatus('✊', '握拳抽牌！', true);
        drawCard();
        lastGesture = 'none';
    } else if (isCardDrawn) {
        updateGestureStatus('☝️', '單指左右搖晃滑走卡片');
    }
}

// 將選中的卡片彈出到中央
function drawCard() {
    if (isDrawing || selectedCardIndex === null || isCardDrawn) return;

    isDrawing = true;
    isCardDrawn = true;
    const selectedCard = tarotCards[selectedCardIndex];
    const isReversed = Math.random() > 0.5;

    const cardElement = cardElements[selectedCardIndex];

    // 顯示遮罩
    const overlay = document.getElementById('cardOverlay');
    if (overlay) overlay.classList.add('visible');

    // 翻牌並彈出到中央
    cardElement.classList.add('flipping');

    const img = cardElement.querySelector('.card-front img');
    if (isReversed) {
        img.style.transform = 'rotate(180deg)';
    } else {
        img.style.transform = 'rotate(0deg)';
    }

    setTimeout(() => {
        cardElement.classList.remove('flipping');
        cardElement.classList.add('drawn');

        // 顯示牌義
        cardName.textContent = selectedCard.name + (isReversed ? ' (逆位)' : ' (正位)');
        cardNameEn.textContent = selectedCard.nameEn + (isReversed ? ' - Reversed' : ' - Upright');
        cardMeaning.textContent = isReversed ? selectedCard.reversedMeaning : selectedCard.meaning;

        infoPanel.classList.add('visible');
        updateGestureStatus('☝️', '單指左右搖晃滑走卡片', true);

        isDrawing = false;
    }, 1000);
}

// 滑走卡片
function slideAwayCard() {
    if (!isCardDrawn || selectedCardIndex === null) return;

    const cardElement = cardElements[selectedCardIndex];
    cardElement.classList.add('slide-away');

    // 隱藏遮罩和資訊面板
    const overlay = document.getElementById('cardOverlay');
    if (overlay) overlay.classList.remove('visible');
    infoPanel.classList.remove('visible');

    updateGestureStatus('👋', '卡片已滑走，選擇下一張');

    setTimeout(() => {
        // 重置狀態
        cardElement.classList.remove('drawn', 'slide-away', 'selected');
        cardElement.style.opacity = '0.3'; // 已抽過的卡片變淡
        cardElement.style.pointerEvents = 'none'; // 禁止再次選擇

        selectedCardIndex = null;
        isCardDrawn = false;
        updateGestureStatus('👋', '移動手掌選擇下一張卡片');
    }, 600);
}
