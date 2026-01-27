// 塔羅牌資料庫 - 22 張大阿爾克那
const tarotCards = [
    { id: 0, name: '愚者', nameEn: 'The Fool', meaning: '新的開始、純真、自發性。愚者代表著踏上新旅程的勇氣，保持開放的心態，勇於冒險和探索未知。這是一個充滿可能性的時刻。', reversedMeaning: '魯莽、不負責任、冒險過度。需要更謹慎地考慮後果。' },
    { id: 1, name: '魔術師', nameEn: 'The Magician', meaning: '創造力、技能、意志力。魔術師象徵著將想法轉化為現實的能力。你擁有所需的工具和才能來實現目標。', reversedMeaning: '操縱、缺乏技巧、浪費潛力。可能在濫用你的才能。' },
    { id: 2, name: '女祭司', nameEn: 'The High Priestess', meaning: '直覺、神秘、內在智慧。女祭司提醒你傾聽內心的聲音，相信你的直覺。知識和智慧來自於內在的探索。', reversedMeaning: '忽視直覺、秘密、缺乏個人中心。需要更深入地探索內心。' },
    { id: 3, name: '皇后', nameEn: 'The Empress', meaning: '豐饒、養育、自然。皇后代表著創造力、美麗和豐盛。關注生活中的美好事物，培養和滋養你的項目。', reversedMeaning: '依賴、窒息、缺乏成長。可能過度保護或物質主義。' },
    { id: 4, name: '皇帝', nameEn: 'The Emperor', meaning: '權威、結構、掌控。皇帝象徵著秩序和穩定。通過紀律和組織來建立穩固的基礎。', reversedMeaning: '專制、僵化、缺乏紀律。權力的濫用或過度控制。' },
    { id: 5, name: '教皇', nameEn: 'The Hierophant', meaning: '傳統、靈性導師、教育。教皇代表傳統智慧和精神指導。尋求知識和遵循既定的道路。', reversedMeaning: '反叛、非正統、個人信仰。質疑傳統和尋找自己的道路。' },
    { id: 6, name: '戀人', nameEn: 'The Lovers', meaning: '愛情、和諧、選擇。戀人象徵著深刻的連結和重要的決定。關於價值觀和關係的抉擇。', reversedMeaning: '不和諧、錯誤選擇、價值觀衝突。關係中的挑戰。' },
    { id: 7, name: '戰車', nameEn: 'The Chariot', meaning: '意志、決心、勝利。戰車代表著克服障礙和堅定前進。通過自律和專注來取得成功。', reversedMeaning: '失控、方向錯誤、缺乏意志。需要重新掌控局勢。' },
    { id: 8, name: '力量', nameEn: 'Strength', meaning: '勇氣、耐心、內在力量。力量象徵著用溫柔和同情心克服挑戰。真正的力量來自內心。', reversedMeaning: '自我懷疑、缺乏信心、原始情緒。需要培養內在的勇氣。' },
    { id: 9, name: '隱者', nameEn: 'The Hermit', meaning: '內省、尋求真理、獨處。隱者代表著內在的探索和智慧的追求。需要獨處時間來思考。', reversedMeaning: '孤立、孤獨、逃避。過度隱居或拒絕他人的幫助。' },
    { id: 10, name: '命運之輪', nameEn: 'Wheel of Fortune', meaning: '變化、循環、命運。命運之輪象徵著生命的起伏。接受變化並相信更高的計劃。', reversedMeaning: '厄運、抗拒改變、失控。生活的負面循環。' },
    { id: 11, name: '正義', nameEn: 'Justice', meaning: '公平、真理、因果。正義代表著平衡和誠實。你的行為會得到應有的結果。', reversedMeaning: '不公、不誠實、逃避責任。需要面對真相。' },
    { id: 12, name: '倒吊人', nameEn: 'The Hanged Man', meaning: '暫停、放手、新視角。倒吊人象徵著犧牲和從不同角度看待事物。暫時的停滯帶來洞察。', reversedMeaning: '延遲、抗拒、無用的犧牲。拒絕改變觀點。' },
    { id: 13, name: '死神', nameEn: 'Death', meaning: '結束、轉變、重生。死神代表著必要的結束和新的開始。擁抱變化和轉化。', reversedMeaning: '抗拒改變、停滯、恐懼。難以放手過去。' },
    { id: 14, name: '節制', nameEn: 'Temperance', meaning: '平衡、和諧、耐心。節制象徵著中庸之道和內在的平衡。尋找生活的平衡點。', reversedMeaning: '失衡、過度、缺乏和諧。需要重新找到平衡。' },
    { id: 15, name: '惡魔', nameEn: 'The Devil', meaning: '束縛、誘惑、唯物主義。惡魔代表著你可能被物質或慾望所困。覺察你的依賴。', reversedMeaning: '釋放、覺醒、擺脫束縛。打破限制性的習慣。' },
    { id: 16, name: '塔', nameEn: 'The Tower', meaning: '突然改變、動盪、啟示。塔象徵著舊結構的崩潰。雖然痛苦，但為重建創造空間。', reversedMeaning: '避免災難、恐懼改變、延遲不可避免的事。' },
    { id: 17, name: '星星', nameEn: 'The Star', meaning: '希望、靈感、重生。星星代表著在黑暗後的希望和治療。保持信念和樂觀。', reversedMeaning: '絕望、缺乏信心、失去方向。需要重新點燃希望。' },
    { id: 18, name: '月亮', nameEn: 'The Moon', meaning: '幻覺、恐懼、潛意識。月亮象徵著不確定和迷惑。傾聽你的夢境和直覺。', reversedMeaning: '釋放恐懼、內在混亂、壓抑情緒。混亂逐漸清晰。' },
    { id: 19, name: '太陽', nameEn: 'The Sun', meaning: '喜悅、成功、慶祝。太陽代表著光明、溫暖和積極的能量。享受生命的美好。', reversedMeaning: '暫時陰霾、過度樂觀、延遲的成功。陽光仍會到來。' },
    { id: 20, name: '審判', nameEn: 'Judgement', meaning: '反思、清算、重生。審判象徵著覺醒和第二次機會。評估過去並向前邁進。', reversedMeaning: '自我懷疑、內疚、逃避責任。難以原諒自己。' },
    { id: 21, name: '世界', nameEn: 'The World', meaning: '完成、成就、整合。世界代表著旅程的完成和成功。慶祝你的成就並準備新的循環。', reversedMeaning: '未完成、缺乏閉合、延遲。接近完成但還需努力。' }
];

// 應用狀態
let camera = null;
let hands = null;
let isReady = false;
let selectedCardIndex = null;
let isDrawing = false;
let isCardDrawn = false;
let cardElements = [];

// 搖晃檢測
let shakeHistory = [];
const SHAKE_THRESHOLD = 0.15;
const SHAKE_TIME_WINDOW = 800;

// DOM 元素
const startBtn = document.getElementById('startBtn');
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const gestureStatus = document.getElementById('gestureStatus');
const carouselTrack = document.getElementById('carouselTrack');
const infoPanel = document.getElementById('infoPanel');
const cardName = document.getElementById('cardName');
const cardNameEn = document.getElementById('cardNameEn');
const cardMeaning = document.getElementById('cardMeaning');
const tutorialOverlay = document.getElementById('tutorialOverlay');
const tutorialBtn = document.getElementById('tutorialBtn');

// 生成所有塔羅牌 - 一字排開
function generateCards() {
    tarotCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'tarot-card';
        cardElement.dataset.index = index;

        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        const backImg = document.createElement('img');
        backImg.src = 'PIC/back.png';
        backImg.alt = '卡牌背面';
        cardBack.appendChild(backImg);

        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        const img = document.createElement('img');
        img.src = getCardImage(card.id);
        img.alt = card.name;
        cardFront.appendChild(img);

        cardElement.appendChild(cardBack);
        cardElement.appendChild(cardFront);
        carouselTrack.appendChild(cardElement);

        // 點擊事件 - 備用抽牌方式
        cardElement.addEventListener('click', () => {
            if (isCardDrawn || isDrawing) return;
            selectedCardIndex = index;
            updateSelectedCard();
            drawCard();
        });

        cardElements.push(cardElement);
    });
}

// 手部位置追蹤
let lastHandX = 0.5;
let handMoveThreshold = 0.05;

// 根據手部位置選擇卡片
function selectCardByHandPosition(handX, handY) {
    if (isCardDrawn || isDrawing) return;

    // 翻轉 X 坐標（因為攝影機是鏡像的）
    const flippedX = 1 - handX;

    // 檢測手勢左右滑動
    const handDelta = flippedX - lastHandX;

    if (Math.abs(handDelta) > handMoveThreshold) {
        // 手往右滑 -> 選下一張牌
        if (handDelta > 0 && selectedCardIndex !== null && selectedCardIndex < cardElements.length - 1) {
            // 找下一張未抽過的牌
            for (let i = selectedCardIndex + 1; i < cardElements.length; i++) {
                if (cardElements[i].style.opacity !== '0.3') {
                    selectedCardIndex = i;
                    updateSelectedCard();
                    scrollToSelectedCard();
                    break;
                }
            }
        }
        // 手往左滑 -> 選上一張牌
        else if (handDelta < 0 && selectedCardIndex !== null && selectedCardIndex > 0) {
            // 找上一張未抽過的牌
            for (let i = selectedCardIndex - 1; i >= 0; i--) {
                if (cardElements[i].style.opacity !== '0.3') {
                    selectedCardIndex = i;
                    updateSelectedCard();
                    scrollToSelectedCard();
                    break;
                }
            }
        }
        // 如果還沒選中任何牌，選中第一張
        else if (selectedCardIndex === null) {
            for (let i = 0; i < cardElements.length; i++) {
                if (cardElements[i].style.opacity !== '0.3') {
                    selectedCardIndex = i;
                    updateSelectedCard();
                    scrollToSelectedCard();
                    break;
                }
            }
        }

        lastHandX = flippedX;
    }
}

// 滾動到選中的卡片
function scrollToSelectedCard() {
    if (selectedCardIndex === null) return;
    const card = cardElements[selectedCardIndex];
    const carousel = document.getElementById('tarotCarousel');

    card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
}

// 更新選中的卡片
function updateSelectedCard() {
    cardElements.forEach((card, index) => {
        if (index === selectedCardIndex) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    // 更新提示文字
    if (selectedCardIndex !== null) {
        updateGestureStatus('✊', `已選第 ${selectedCardIndex + 1} 張，握拳抽牌`);
    }
}

// 教學覆蓋層
tutorialBtn.addEventListener('click', () => {
    tutorialOverlay.classList.add('hidden');
    initializeCamera();
});

startBtn.addEventListener('click', () => {
    tutorialOverlay.classList.add('hidden');
    initializeCamera();
});

async function initializeCamera() {
    try {
        startBtn.disabled = true;
        startBtn.textContent = '⏳ 初始化中...';

        // 初始化 MediaPipe Hands
        hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.3, // 降低門檻，提高偵測靈敏度
            minTrackingConfidence: 0.3
        });

        hands.onResults(onResults);

        // 啟動攝影機
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        });

        webcamElement.srcObject = stream;

        await new Promise((resolve) => {
            webcamElement.onloadedmetadata = () => {
                resolve();
            };
        });

        camera = new Camera(webcamElement, {
            onFrame: async () => {
                await hands.send({ image: webcamElement });
            },
            width: 1280,
            height: 720
        });

        await camera.start();

        isReady = true;
        startBtn.textContent = '✅ 運行中';
        startBtn.style.display = 'none';
        gestureStatus.classList.add('active');
        updateGestureStatus('👋', '移動手掌選擇卡片');

    } catch (error) {
        console.error('初始化失敗:', error);
        startBtn.disabled = false;
        startBtn.textContent = '❌ 啟動失敗，請重試';
        alert('無法存取攝影機。請確保已授予權限。');
    }
}

function onResults(results) {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
        updateGestureStatus('👋', '未偵測到手部');
        return;
    }

    const landmarks = results.multiHandLandmarks[0];

    // 使用手掌中心（landmark 9）來選擇卡片
    const handX = landmarks[9].x;
    const handY = landmarks[9].y;

    selectCardByHandPosition(handX, handY);

    // 偵測手勢
    const gesture = detectGesture(landmarks);
    handleGesture(gesture, landmarks);
}

let gestureStartTime = 0;
let lastGesture = 'none';

function detectGesture(landmarks) {
    // 檢測 OK 手勢（拇指和食指指尖靠近）
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const thumbIndexDist = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y);

    if (thumbIndexDist < 0.05) {
        return 'ok';
    }

    const fingers = {
        thumb: isFingerExtended(landmarks, 4, 3, 2),
        index: isFingerExtended(landmarks, 8, 7, 6),
        middle: isFingerExtended(landmarks, 12, 11, 10),
        ring: isFingerExtended(landmarks, 16, 15, 14),
        pinky: isFingerExtended(landmarks, 20, 19, 18)
    };

    const extendedCount = Object.values(fingers).filter(v => v).length;

    if (extendedCount <= 2) {
        return 'fist';
    } else if (extendedCount >= 3) {
        return 'open';
    }

    return 'none';
}

function isFingerExtended(landmarks, tipIdx, pipIdx, mcpIdx) {
    const tip = landmarks[tipIdx];
    const pip = landmarks[pipIdx];
    const wrist = landmarks[0];

    const tipDist = Math.hypot(tip.x - wrist.x, tip.y - wrist.y);
    const pipDist = Math.hypot(pip.x - wrist.x, pip.y - wrist.y);

    return tipDist > pipDist * 1.05;
}

function detectShakeGesture(handX) {
    const SHAKE_THRESHOLD = 0.05; // X軸移動的閾值
    const SHAKE_DURATION = 10; // 記錄最近10個X位置

    shakeHistory.push(handX);
    if (shakeHistory.length > SHAKE_DURATION) {
        shakeHistory.shift();
    }

    if (shakeHistory.length < SHAKE_DURATION) {
        return false;
    }

    const minX = Math.min(...shakeHistory);
    const maxX = Math.max(...shakeHistory);

    return (maxX - minX) > SHAKE_THRESHOLD;
}

let fistDetectedTime = 0;
let okDetectedTime = 0;
const FIST_HOLD_TIME = 150; // 握拳需要保持 150ms
const OK_HOLD_TIME = 200; // OK手勢需要保持 200ms

function handleGesture(gesture, landmarks) {
    const currentTime = Date.now();

    // 卡片已抽出時，檢測 OK 手勢關閉卡片
    if (isCardDrawn) {
        if (gesture === 'ok') {
            if (okDetectedTime === 0) {
                okDetectedTime = currentTime;
                updateGestureStatus('👌', '保持OK手勢...', true);
            } else if (currentTime - okDetectedTime >= OK_HOLD_TIME) {
                updateGestureStatus('👌', '收起卡片！', true);
                collectCard();
                okDetectedTime = 0;
            }
        } else {
            okDetectedTime = 0;
            updateGestureStatus('👌', 'OK手勢收起卡片');
        }
        return;
    }

    // 張開手掌 - 選擇模式
    if (gesture === 'open') {
        fistDetectedTime = 0;
        if (selectedCardIndex !== null) {
            updateGestureStatus('👋', '握拳抽取選中的卡片');
        } else {
            updateGestureStatus('👋', '左右滑動選擇卡片');
        }
    }
    // 握拳 - 抽牌
    else if (gesture === 'fist' && !isDrawing && selectedCardIndex !== null) {
        if (fistDetectedTime === 0) {
            fistDetectedTime = currentTime;
            updateGestureStatus('✊', '保持握拳...', true);
        } else if (currentTime - fistDetectedTime >= FIST_HOLD_TIME) {
            updateGestureStatus('✊', '抽牌！', true);
            drawCard();
            fistDetectedTime = 0;
        }
    } else {
        fistDetectedTime = 0;
    }
}

function updateGestureStatus(icon, text, detecting = false) {
    const iconElement = gestureStatus.querySelector('.gesture-icon');
    const textElement = gestureStatus.querySelector('.gesture-text');

    if (iconElement) iconElement.textContent = icon;
    if (textElement) textElement.textContent = text;

    if (detecting) {
        gestureStatus.classList.add('detecting');
    } else {
        gestureStatus.classList.remove('detecting');
    }
}

function drawCard() {
    if (isDrawing || selectedCardIndex === null || isCardDrawn) return;

    isDrawing = true;
    isCardDrawn = true;
    const selectedCard = tarotCards[selectedCardIndex];
    const isReversed = Math.random() > 0.5;

    const cardElement = cardElements[selectedCardIndex];

    // 設定正逆位
    const img = cardElement.querySelector('.card-front img');
    if (isReversed) {
        img.style.transform = 'rotate(180deg)';
    } else {
        img.style.transform = 'rotate(0deg)';
    }

    // 移除選中樣式，直接顯示抽出的卡片
    cardElement.classList.remove('selected');
    cardElement.classList.add('drawn');

    // 移除 carousel 的 overflow 限制
    const carousel = document.getElementById('tarotCarousel');
    carousel.classList.add('card-drawn');

    // 顯示牌義
    cardName.textContent = selectedCard.name + (isReversed ? ' (逆位)' : ' (正位)');
    cardNameEn.textContent = selectedCard.nameEn + (isReversed ? ' - Reversed' : ' - Upright');
    cardMeaning.textContent = isReversed ? selectedCard.reversedMeaning : selectedCard.meaning;

    infoPanel.classList.add('visible');
    updateGestureStatus('👌', 'OK手勢收起卡片');

    isDrawing = false;
}

// 收集卡片到右下角
function collectCard() {
    if (!isCardDrawn || selectedCardIndex === null) return;

    const cardElement = cardElements[selectedCardIndex];
    const selectedCard = tarotCards[selectedCardIndex];
    const isReversed = cardElement.querySelector('.card-front img').style.transform === 'rotate(180deg)';

    // 隱藏資訊面板
    infoPanel.classList.remove('visible');

    // 創建收集的卡片縮圖
    const collectedCards = document.getElementById('collectedCards');
    const collectedCard = document.createElement('div');
    collectedCard.className = 'collected-card';
    collectedCard.title = selectedCard.name + (isReversed ? ' (逆位)' : ' (正位)');

    const img = document.createElement('img');
    img.src = getCardImage(selectedCard.id);
    img.alt = selectedCard.name;
    if (isReversed) {
        img.style.transform = 'rotate(180deg)';
    }
    collectedCard.appendChild(img);

    // 點擊收集的卡片可以查看詳情
    collectedCard.addEventListener('click', () => {
        alert(`${selectedCard.name} (${isReversed ? '逆位' : '正位'})\n\n${isReversed ? selectedCard.reversedMeaning : selectedCard.meaning}`);
    });

    collectedCards.appendChild(collectedCard);

    // 移除原卡片
    cardElement.classList.remove('drawn');
    cardElement.style.display = 'none';

    // 恢復 carousel 的 overflow
    const carousel = document.getElementById('tarotCarousel');
    carousel.classList.remove('card-drawn');

    // 重置狀態
    selectedCardIndex = null;
    isCardDrawn = false;

    updateGestureStatus('👋', '選擇下一張卡片');
}

// 關閉卡片函數（點擊關閉，也會收集）
function slideAwayCard() {
    collectCard();
}

function getCardImage(cardId) {
    return `PIC/${cardId}.png`;
}

// 初始化
generateCards();

// 點擊任意位置關閉卡片
document.addEventListener('click', (e) => {
    if (isCardDrawn && !e.target.closest('.tarot-card:not(.drawn)')) {
        slideAwayCard();
    }
});

console.log('%c🐱 貓咪塔羅牌已載入', 'font-size: 20px; color: #B464FF; font-weight: bold;');
console.log('%c左右滑動選牌，握拳抽牌，或直接點擊卡片', 'font-size: 14px; color: #FF64E8;');
