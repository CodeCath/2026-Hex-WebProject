# 🚀 2026 Web Camp - 個人專案切版紀錄與 AI 協作覆盤

**[Live Demo 預覽連結]** (請填入你的 GitHub Pages 網址)

這份專案是我將[設計稿](https://www.figma.com/design/kOYSDHQieVlOWIr4PPnuQX/%E5%85%AD%E8%A7%92%EF%BD%9C2026%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E5%B8%AB%E9%AB%94%E9%A9%97%E7%87%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?node-id=11107-13669&p=f&t=B6SPI5TkAfwE6qYx-0)轉化為高互動性靜態網頁的實戰紀錄。本次開發是我首次使用 OOCSS 架構及與 AI協作完成第三級 - 最終任務 - 個人品牌網站

---

## 🧠 一、 開發流程與切版策略 (Workflow Strategy)

在與 AI 協作的過程中，我總結出了一套最有效的開發流程：

1. **建立設計系統 (Design Tokens):** 開發初期，先在 `:root` 設定 CSS 變數，並透過 OOCSS 建立全域積木 (如 `.bg-primary-900`, `.title-xxxl`)，確保全站視覺高度統一。
2. **「宏觀至微觀」的 Prompt 策略:** AI 對細節（Padding/Margin）的理解有時不夠精確，我採取「先定義區塊結構 (DOM Tree)，再賦予詳細屬性」的策略，大幅減少來回溝通的成本。
3. **QA 與重構 (Refactoring):** 我扮演「藝術總監與 QA」的角色，負責比對 Figma 設計稿的畫素級誤差，並在 AI 給出的雛形基礎上，手動優化層級與權重。

---

## 🎓 二、 關鍵技術成長：8-grid system 與黃金比例

在這次開發中，我最重要的突破就是學會了 **8-grid system** 與 **黃金比例** 的應用：

* **8-grid system 的應用:** 我學會了以 `8px` 作為最小單位的倍數來規劃間距（如 `8px`, `16px`, `24px`, `48px`, `80px`）。這種方式讓整個版面的留白（White Space）產生規律的節奏感，即便是在處理手機版 RWD 時，畫面也不會顯得雜亂。
* **黃金比例排版:** 在處理文章內頁的標題與內文排版時，我利用比例關係來設定行高 (Line-height) 與字級 (Font-size)。這不僅僅是為了美觀，更讓使用者在閱讀長文時能有更佳的視覺體驗與舒適度。
* **切版實踐:** 我將這些原則落實於 `.article-body > * { padding-top: 16px; }` 等宣告中，確保全站的段落呼吸空間 (Breathability) 維持在完美的數學規律上。

---

## 🤖 三、 與 AI 協作的好處與壞處 (Pros & Cons)

### 👍 優勢 (Pros)
* **邏輯開發加速:** 在實作 Tabs 切換、手風琴選單與彈出視窗 (Modal) 時，AI 能快速產出結構化代碼，讓我能專注於優化動畫曲線 (`transition: all 0.3s ease`)。
* **解決複雜 RWD 問題:** 如處理手機版水平滾動時的「突破 Container」技巧，AI 提供了現代化的 `scroll-snap` 與 `negative margin` 方案。

### 👎 限制與避坑指南 (Pitfalls)
* **不要依賴 AI 的 CSS 權重管理:** AI 喜歡偷懶使用 `!important` 或 `inline style`。我設定了嚴格規則：**一律使用 class，一律嚴禁 `!important`，一律不准寫 `style="..."`。**
* **重構副作用 (Refactoring Side-effects):** AI 有時為了「優化代碼」會刪除全域通用 class (如 `.h-100`)。經驗教訓：**貼上 AI 重構的程式碼前，務必對比 Git Diff，確保關鍵 Class 未被誤刪。**
* **先大後小的切版指令:** AI 看圖容易產生「幻覺」。切版時務必先由我定義：「這區分 Header, Banner, Content, Image」，先定義外框，再要求內容細節，能減少 80% 重工率。

---

## 🚧 四、 踩過的坑 (Technical Hurdles)

1. **Z-index 層級地獄:** 在實作 Navbar 手機版遮罩與 Modal 視窗時，必須清楚定義層級表（Navbar: 100, Overlay: 999, Modal: 9999），否則極易出現元件被擋住的問題。
2. **CSS 權重疊加:** 利用「父層 class + 子層 class」的組合方式（例如 `.stat-item .meta-icon`），以增加權重值來擊敗預設樣式，避免頻繁使用 `!important`。
3. **Grid 與 Flex 的選擇:** 專案卡片需要交疊效果時，使用 `CSS Grid` 強制將圖片與內容卡片定位在同一個 `grid-row` 是目前最優雅且穩定的做法。

---

# 🧠 AI 給我的評語 (AI Collaboration Review)

在本次專案中，我將 AI 定位為「資深工程師助手」，以下是 AI 對於這場協作的總結：

### 1. AI 依賴度評估：★★★★☆ (4/5)
高度依賴 AI 處理繁瑣的樣板代碼、複雜的 JavaScript 邏輯與動畫過場，但我始終保持「架構規劃」與「細節品質 (Pixel-perfect)」的掌控權。我學會了如何定義邊界，讓 AI 在加速產出的同時，不至於干擾我對全站架構的決策。

### 2. 開發邏輯評語
* **模組化思維:** 你具備極佳的 OOCSS 抽象能力，能將視覺需求轉化為可重用的 CSS 積木，這讓你的專案具備極高的維護性。
* **嚴謹的品質控管:** 你對 8-grid system 與間距的把控極為敏銳，能精準抓出 AI 產出時的細微偏差，這種「品質至上」的精神是優秀開發者的核心。
* **拆解問題的能力:** 面對複雜的 `services.html`，你將其拆解為流程、案例與 FAQ 三個邏輯模塊，這種由宏觀到微觀的處理策略，有效地降低了開發複雜度。

### 3. 下次優化方向 (Better Strategies)
* **預先資料結構化:** 下次可以先整理好內容的 JSON 或 JS 物件，讓 AI 透過迴圈 (Map) 渲染內容，而非手動寫 HTML，這將大幅提升維護效率。
* **更頻繁的 Git 分支:** 在處理大型功能（如 Tabs 切換）前，建立獨立的 Git 分支，能讓開發更具彈性，確保「後悔藥」隨時可用。
* **效能優先思考:** 未來可優先嘗試導入 WebP 圖片優化與更精簡的程式碼組織，進一步提升網站加載速度與搜尋引擎優化 (SEO) 分數。