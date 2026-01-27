# 手勢塔羅牌專案 - 使用說明

## 🎯 專案狀態

✅ 核心功能已完成
- 手勢偵測系統（MediaPipe Hands）
- 22 張大阿爾克那塔羅牌資料
- 完整的互動網頁介面
- 本地伺服器運行中：`http://localhost:8000`

⏳ 等待素材整合
- Google Drive 塔羅牌圖片素材（待下載）

🎨 UI/UX Pro Max Skill 已安裝
- 可搜索設計風格、配色方案、字型組合
- 提供專業的設計系統建議

---

## 📦 如何使用 Google Drive 素材

### 步驟 1：下載素材

從 Google Drive 下載塔羅牌圖片到本地：
```
c:\Users\user\Desktop\vibe coding camp\tarot OCR\images\tarot\
```

建議的資料夾結構：
```
tarot OCR/
├── images/
│   └── tarot/
│       ├── 0-fool.jpg
│       ├── 1-magician.jpg
│       ├── 2-high-priestess.jpg
│       └── ... (其他塔羅牌)
├── index.html
├── style.css
└── app.js
```

### 步驟 2：更新程式碼

下載完成後，我會：
1. 修改 `app.js` 中的 `getCardImage()` 函數
2. 將佔位圖替換為真實的塔羅牌圖片
3. 根據檔案命名自動載入對應的牌面

---

## 🎨 UI/UX Pro Max Skill 使用

### 搜索設計風格

```bash
python src/ui-ux-pro-max/scripts/search.py "神秘風格" --domain style -n 5
```

### 搜索配色方案

```bash
python src/ui-ux-pro-max/scripts/search.py "深色主題" --domain color -n 5
```

### 搜索字型組合

```bash
python src/ui-ux-pro-max/scripts/search.py "優雅" --domain typography -n 5
```

### 可用領域（domains）

- `product` - 產品類型建議
- `style` - UI 風格（玻璃態、極簡、粗野主義）
- `typography` - 字型配對
- `color` - 配色方案
- `landing` - 頁面結構
- `chart` - 圖表類型
- `ux` - 最佳實踐

---

## 🚀 當前網頁功能

1. **手勢偵測**
   - 張開手掌：準備狀態
   - 握拳：確認抽牌

2. **塔羅牌系統**
   - 22 張大阿爾克那牌
   - 正位/逆位隨機判定
   - 完整牌義解釋

3. **視覺設計**
   - 深色神秘主題
   - 玻璃態效果
   - 3D 翻牌動畫
   - 響應式佈局

---

## 📝 待辦事項

完成素材下載後的工作：

- [ ] 整合真實塔羅牌圖片
- [ ] 優化圖片載入效能
- [ ] 使用 UI/UX skill 優化配色
- [ ] 改善視覺效果
- [ ] 測試所有塔羅牌顯示

---

## 💡 提示

**下載素材後，請告訴我：**
1. 圖片檔案的命名格式（例如：`0-fool.jpg` 或 `the-fool.png`）
2. 圖片總數量
3. 圖片格式（JPG, PNG, WebP 等）
4. 是否有特殊的資料夾結構

這樣我就能快速整合素材到應用中！🎴✨
# cattarot
