# 個人網站內容 (Personal Website Content - Chinese)

## 基本資料 (Identity)

- **姓名 (Name):** 鄭力誠 (Bruce Cheng)
- **角色 (Role):** Information Engineer (Generative AI & LLM)
- **標語 (Tagline):** 專注於 IC 設計產業的本地端 (On-Premise) 生成式 AI 系統建置，具備從架構設計到全端開發的端對端實戰能力。
- **Email:** <bruce.zheng0814@gmail.com>
- **Avatar:** /assets/avatar.jpg

## 連結 (Links)

- **Github:** <https://github.com/bruce-lcz>
- **Linkedin:** <https://www.linkedin.com/in/bruce-lcz>
- **Email:** mailto:bruce.zheng0814@gmail.com

---

## 工作經歷 (Experience)

### PixArt 原相科技 (current)

- **ID:** pixart
- **職位:** Information Engineer (Generative AI and LLM Projects)
- **期間:** 2025年8月 - 至今
- **公司描述:** 專注於 CMOS 影像感測器及相關 IC 設計的全球領先無晶圓廠半導體公司。 (半導體 / IC 設計)
- **工作描述:** 隸屬於 IT 團隊，負責建置符合 IC 設計產業高資安標準的「本地端 (On-Premise)」生成式 AI 基礎設施，賦能 Legal、Operations 與 R&D 部門。
- **技術棧:** LLM, ASR, AWS Bedrock, System Architecture
- **成就 (Achievements):**
  - L&IP (Legal & IP) 支援：開發自動化合約比對與專利翻譯系統，利用 Vision-LLM OCR 與多層次 LLM 流程，大幅提升法務審核效率並確保資料安全。
  - 會議紀錄自動化：建構完全離線的 Auto-Minutes 系統，整合 ASR 與說話者分離技術，將長音檔處理效率提升 50%–70%。
  - 企業級 AI 平台：建構全離線 GenAI 協作平台，成功驅動 120B+ 超大規模模型，並透過模型分級服務極大化研發效率。
  - 核心能力：具備從硬體推論優化 (vLLM)、後端架構設計到多模態 Pipeline 開發的完整實戰經驗。

### AUO 友達光電 - 先進製造中心 (past)

- **ID:** auo
- **職位:** AI 工程師 / 專案負責人
- **期間:** 2021年8月 - 2025年8月
- **公司描述:** 全球領先的顯示解決方案與智慧製造技術供應商。 (製造 / 顯示技術)
- **工作描述:** 帶領跨部門團隊設計 AI 架構並優化製造流程，將系統從 RAG 演進為結合 Knowledge Graph 的 Agent-based 解決方案。
- **技術棧:** Python, SQL, Databricks, Streamlit, FastAPI, LLM Agents
- **成就 (Achievements):**
  - 跨廠區良率優化：透過 AI 參數推薦，提升良率 1.43%，降低缺陷 12.62%，每月節省約 300 工時。
  - 智慧助理平台：架構升級，從 RAG 演進為結合知識圖譜 (Knowledge Graph) 的 Agent 系統，解決複雜歸因問題。
  - 預防性維護系統 (PHM)：降低缺陷預測誤差 (RMSE) 20%，每月節省 90 小時人力檢測工時。
  - 專業認可：專案成果獲內部「防禦性專利」核可；獲選為公司智慧製造「Level 3 精英人才」。

### 中央研究院 - GIS 中心 (past)

- **ID:** academia-sinica
- **職位:** 研究實習生
- **期間:** 2019年2月 - 2019年7月
- **公司描述:** 台灣最高學術研究機構。 (學術研究)
- **工作描述:** 開發門牌地址資料抽樣與標準化之 Web 系統。
- **技術棧:** Web Development, Data Normalization, PostgreSQL
- **成就 (Achievements):**
  - 開發線上地址抽樣服務系統，獲選 TGIS 最佳學生論文獎。
  - 設計標準化模組與地址屬性資料庫，解決台灣地址格式非結構化問題。

---

## 專案 (Projects)

### 法務合約比對系統

- **ID:** legal-contract-comparison
- **類別:** PixArt
- **角色:** AI Application Engineer
- **期間:** 2026/02 - 2026/03
- **簡述:** 利用 Vision-LLM OCR 與文本比對演算法，取代耗時的人工紙本對照流程。
- **詳細描述:**
  **背景:**
  法務部門回收客戶簽署的紙本合約時，需人工逐字對照掃描件與原始 Docx，以防條文遭竄改。此流程極度耗費人力且具備漏看風險。
  
  **解決方案:**
  - **多模態 OCR 流水線:** 採用 **Nanonets-OCR2-3B (via vLLM)** 進行圖片轉文字，自動排除手寫簽名、印章與非主文噪點。
  - **智慧段落處理:** 運用 **GPT-OSS-120B** 進行段落重組，整合「字元級 Multiset 檢核機制」達成 **100% 零漏字**。
  - **精準比對引擎:** 整合 **diff-match-patch (Myers 演算法)** 實現全文比對，透過座標映射將差異精確標示回原稿段落。
  
  **成效:**
  - 將單份合約的人工核對時間從數十分鐘縮短至秒級自動化比對。
  - 大幅提升法務審核效率，有效降低 OCR 誤讀導致的誤判。
- **主要功能 (Key Features):**
  - 高精度 Vision-LLM OCR 識別與手寫標籤自動化過濾
  - 具備漏字校驗機制 (Multiset Check) 的智慧段落重組
  - 類 Git 的雙欄同步捲動與差異對照 UI
- **挑戰 (Challenges):**
  - 在 OCR 過程中精準辨識並過濾手寫簽名與印章標籤。
  - 確保 LLM 在優化段落格式時，達成法律關鍵字元的 100% 準確度。
- **技術棧:** FastAPI, vLLM, Python, Nanonets-OCR, diff-match-patch

### My Gym Tracker：打造「零干擾、極致美學」的私有 AI 健身教練

- **ID:** personal-gym-tracker-v2
- **類別:** Personal
- **角色:** Developer / Designer
- **期間:** 2024 - Present
- **簡述:** 解決市售 App 廣告過多、數據無法導出、介面生硬的痛點，整合 AI 推理能力的全客製化健身生態系統。
- **詳細描述:**
  **背景:**
  既然市面上的 App 滿是廣告、數據被平台綁架、且無法提供真正懂我的訓練建議，那我就自己寫一個。整合 AI 推理能力，讓紀錄不再是負擔。
  
  **解決方案:**
  - **數位健身教練:** 透過專門設計的 Prompt Engineering，讓 AI 根據歷史訓練量提供下一階段建議。
  - **無痛紀錄體驗:** 利用 LLM 處理異質命名與肌肉群自動映射，輸入模糊動作名稱即可自動歸類。
  - **擬物化美學:** 手工 Vanilla CSS 打造 Neumorphism 介面，具備觸覺回饋感，內建 Bruce/Linda 雙身分主題。
  - **數據主權與極速:** 架構從 Google Sheets 升級至 Cloudflare D1 (SQLite)，由 Workers 驅動毫秒級高速同步。
  
  **成效:**
  - 實現 100% 數據導出自由，解決數據被鎖死在商業 App 的問題。
  - 邊緣運算節點即時同步，消除加載圈圈，達成「即開即記」的極速體驗。
- **主要功能 (Key Features):**
  - 懂你的 AI 腦：歷史 Volume 分析與結構化建議
  - Neumorphism 擬物化 UI 與 Bruce/Linda 雙身分配色系統
  - 數據主權：1-Click 導出完整訓練數據
- **挑戰 (Challenges):**
  - 使用純 Vanilla CSS 實現複雜的 Neumorphism 視覺效果與互動回饋。
  - 確保 LLM 在處理異質動作名稱時的自動映射準確度。
- **技術棧:** React 18, TypeScript, Vite, Cloudflare Workers, Cloudflare D1, Groq, OpenAI

### 專利文件多語系翻譯系統

- **ID:** patent-translation-service
- **類別:** PixArt
- **角色:** AI Application Engineer
- **期間:** 2026/01 - 2026/02
- **簡述:** 針對 IC 設計專利開發的本地端翻譯引擎，實現英轉繁/簡中之高品質翻譯。
- **詳細描述:**
  **背景:**
  涉及未公開技術的專利文件無法使用雲端服務。此外，需解決兩岸技術用語（如：影片 vs. 視頻）之專業轉換。
  
  **解決方案:**
  - **兩階段工作流:** 設計「初版翻譯 + 語意梳理」雙層 LLM 流程，第二階段針對法律語法進行校對與風格修飾。
  - **Prompt 驅動在地化:** 透過 System Prompt 工程與 Few-Shot Learning，將技術術語差異內化至模型生成邏輯。
  - **自動化解析:** 整合 **python-docx** 開發 Web 介面，支援上傳原始 Word 檔案並保留原始排版格式。
  
  **成效:**
  - 翻譯品質接近專業事務所初稿，顯著縮短往返修正時間。
  - 100% 本地端推論，徹底解決機密文件外流的資安風險。
- **主要功能 (Key Features):**
  - 基於 LLM 的兩階段自動化翻譯與語意梳理機制
  - 兩岸三地專利技術術語之自動化在地化轉換
  - 支援 Word (.docx) 檔案上傳與自動化格式保留
- **挑戰 (Challenges):**
  - 透過 Prompt Engineering 穩定模型對特定專業術語的翻譯準確度。
  - 優化 LLM 在長文件處理過程中的風格一致性。
- **技術棧:** Python, vLLM, python-docx, FastAPI, Prompt Engineering

### Auto-Minutes 離線會議轉錄系統

- **ID:** auto-minutes-system
- **類別:** PixArt
- **角色:** AI Application Engineer
- **期間:** 2025/11 - 2026/01
- **簡述:** 整合 ASR、說話者標記與 LLM 摘要技術，專為資安需求打造的離線會議記錄系統。
- **詳細描述:**
  **背景:**
  內部會議涉及核心機密，嚴禁使用雲端服務。需在離線環境下實現具備說話者標記的轉錄與摘要。
  
  **解決方案:**
  - **語音處理:** 整合 **Whisper (Breeze ASR)** 與 **pyannote.audio**，實現具備詞級時間戳的語音轉文字與說話者分離。
  - **LLM 文本優化:** 透過 **vLLM** 進行智慧標點格式化、同音字修正及結構化摘要產出。
  - **效能架構:** 實作 **VAD** 智慧切割與 **GPU 批次處理** 機制，並導入 **SHA256 緩存系統** 避免重複計算。
  
  **成效:**
  - 實現 100% 離線化作業，確保機密會議資料不外流。
  - 長音檔處理時間縮短約 **50%–70%**，顯著提升會議紀錄產出效率。
- **主要功能 (Key Features):**
  - 具備說話者識別 (Speaker Diarization) 的精確轉錄與對齊
  - 基於 vLLM 的自動化文本優化與會議摘要生成
  - 支援 VAD 智慧切割、GPU 批次加速與運算快取機制
- **挑戰 (Challenges):**
  - 優化長音檔處理中的記憶體配置，解決單一模型推論時間過長問題。
  - 在多人同時發言的情境下，精準對齊 ASR 時間戳與說話者標籤。
- **技術棧:** Python, Whisper, pyannote.audio, vLLM, Flask

### 企業級全離線 GenAI 協作平台

- **ID:** pixart-genai-hub
- **類別:** Infrastructure
- **角色:** AI 架構師 (AI Architect)
- **期間:** 2025 - Present
- **簡述:** 建構 PixArt 專屬全離線 AI 協作入口，整合 120B+ 模型與多模態能力。
- **詳細描述:**
  **背景與目標:**
  在完全阻斷外網的 **Air-gapped 環境** 下，建構能對標雲端 AI 體驗的本地端服務，確保研發 IP 安全並極大化 R&D 效率。
  
  **核心解決方案:**
  - **高效能推論引擎:** 以 **vLLM** 為核心，於 H200 伺服器上驅動 **GPT-OSS-120B** 級別模型。
  - **模型分級服務策略 (Model Tiering):**
    - **Fast Mode**: 針對代碼補全與簡單 Q&A。
    - **Thinking Mode**: 調用完整 120B 算力進行深度思考與複雜推理。
  - **多模態分析 Pipeline:** 開發 **Vision-to-Text Pipeline**，利用 **Gemma (Vision)** 負責圖像感知，串接 120B 模型進行邏輯分析。
  - **智慧上下文管理:** 透過動態遺忘與精確截斷策略，維持長對話的邏輯連貫性。
  
  **成效:**
  - 實現 100% 離線運作，核心開發邏輯與技術文件零外流風險。
  - 透過分流機制有效分配運算資源，提升研發團隊整體滿意度。
- **主要功能 (Key Features):**
  - 120B 超大規模模型部署與 Fast/Thinking 雙模式切換
  - 多模態 Vision-to-Text Pipeline 整合
  - 智慧動態 Context 管理，支援長對話不崩潰
- **挑戰 (Challenges):**
  - 在離線環境下平衡模型參數量、延遲與推論速度。
  - 長文本處理中的精準截斷策略與對話記憶保留。
- **技術棧:** vLLM, Docker, Open WebUI, GPT-OSS-120B, Gemma (Vision)

### 智慧助理平台 (RAG -> Agent)

- **ID:** auo-assistant
- **類別:** AUO
- **角色:** AI 架構師
- **期間:** 2023 - 2025
- **簡述:** 從文件檢索 (RAG) 演進為結合知識圖譜的自主 Agent 系統。
- **詳細描述:**
  **演進:**
  最初為協助工程師查找技術文件的 RAG 系統，後演進為能主動查詢資料庫並執行診斷任務的 Agentic 工作流。
  
  **架構:**
  - **RAG 階段:** 向量資料庫 + LangChain。
  - **Agent 階段:** 多代理系統 (LangGraph)，具備工具使用能力 (SQL 查詢、API 呼叫)。
  - **知識圖譜:** 整合 Neo4j 以映射設備、製程與專有名詞之間的關聯。
  
  **關鍵成就:**
  - 從單純問答進化到能回答「為什麼良率下降？」這類複雜歸因問題。
  - 建立 Table Description Generator 自動化知識整備流程。
- **主要功能 (Key Features):**
  - Multi-Agent 多代理架構
  - Knowledge Graph 知識圖譜整合
  - SQL Agent 自動化數據查詢
- **挑戰 (Challenges):**
  - 確保 Text-to-SQL 在複雜製造數據庫的準確性。
  - 解決 Agent 執行路徑的幻覺與無限迴圈問題。
- **技術棧:** LLM, LangGraph, Neo4j, RAG, Python

### 跨廠區良率 AI 優化 (Golden Path)

- **ID:** auo-yield
- **類別:** AUO
- **角色:** 資料科學家
- **期間:** 2021 - 2023
- **簡述:** 跨多個廠區提升良率 1.43% 並減少 12.62% 缺陷。
- **詳細描述:**
  **問題:**
  生產相似產品的不同廠區之間存在無法解釋的良率差異。
  
  **方法:**
  - **資料標準化:** 統一跨廠區的感測器數據格式與定義。
  - **Golden Path 演算法:** 識別最佳機台組合路徑與參數設定。
  - **可解釋性 AI (XAI):** 提供工程師調整參數的依據，而非黑箱預測。
  
  **結果:**
  - 良率提升: **+1.43%**
  - 缺陷減少: **-12.62%**
  - 營運節省: **每月約 300 工時**
- **主要功能 (Key Features):**
  - 最佳路徑推薦演算法
  - 跨站點資料標準化 (ETL)
  - LIME 模型可解釋性分析
- **挑戰 (Challenges):**
  - 跨廠區設備能力不一致的標準化難題。
  - 改變既定製程參數的現場溝通與驗證。
- **技術棧:** Python, SQL, Scikit-learn, LIME, Genetic Algorithm

### 預防性維護系統 (PM)

- **ID:** auo-pm
- **類別:** AUO
- **角色:** AI 工程師 / 專案負責人
- **期間:** 2022 - 2024
- **簡述:** 導入自定義 Loss Function，降低 20% 缺陷預測誤差。
- **詳細描述:**
  **背景:**
  傳統維護依賴固定週期，無法應對突發性設備異常。
  
  **解決方案:**
  - 開發基於 LSTM 的時間序列預測模型。
  - **創新:** 設計 Trend Consistency Loss Function (趨勢一致性損失函數)，專注於捕捉異常趨勢而非單點誤差。
  - 整合排程系統，自動建議最佳維護時機。
  
  **成效:**
  - 預測誤差 (RMSE) 降低 **20%**。
  - 每月節省 **90 工時** 的人工檢測時間。
- **主要功能 (Key Features):**
  - Custom Loss Function 設計
  - LSTM 時間序列預測
  - 維護排程最佳化
- **挑戰 (Challenges):**
  - 處理極度不平衡的故障數據 (Class Imbalance)。
  - 平衡產能需求與停機維護的成本衝突。
- **技術棧:** Python, TensorFlow/PyTorch, LSTM, FastAPI

### 地址資料標準化系統

- **ID:** address-normalization
- **類別:** Research
- **角色:** 研究實習生
- **期間:** 2019
- **簡述:** 解決台灣地址格式混亂問題的自動化正規化系統。
- **詳細描述:**
  **專案:**
  為 GIS 中心開發一套系統，用於解析與標準化來自各來源的非結構化地址資料。
  
  **成就:**
  - 設計地址正規化模組，建立全國地址屬性資料庫。
  - 獲得 2019 TGIS 最佳學生論文獎。
- **主要功能 (Key Features):**
  - 地址字串正規化演算法
  - Web 抽樣服務系統
- **挑戰 (Challenges):**
  - 台灣地址格式的高度歧義性處理。
- **技術棧:** Python, Django, PostgreSQL, Web Development

---

## 學歷 (Education)

### 國立雲林科技大學 - 碩士

- **科系:** 工業工程與管理
- **期間:** 2019 - 2021
- **論文:** 基於 R-tree 與 SPACE-MDL-LSTM 之大區域人流預測效率優化

### 國立雲林科技大學 - 學士

- **科系:** 工業工程與管理
- **期間:** 2015 - 2019
- **論文:** 彈性生產流程之機台派工最佳化

## 獎項 (Awards)

- **2025:** 智慧製造 Level 3 精英人才 (預測式生產) - AUO 友達光電
- **2020:** 最佳學生論文獎 - 台灣地理資訊學會年會暨學術研討會(TGIS)
- **2019:** 最佳學生論文獎 - 台灣地理資訊學會年會暨學術研討會(TGIS)

## 技能 (Skills)

### 生成式 AI 與 LLM 架構 (GenAI)

On-Premise Deployment (vLLM), RAG Architecture, Multi-Agent Systems (LangGraph), Knowledge Graph (Neo4j), ASR & Audio Processing (Whisper), Prompt Engineering, Vector Database Integration

### 系統工程與後端開發 (System Engineering)

System Architecture Design, Python Backend (FastAPI / Django), API Design & Microservices, Containerization (Docker), Cloud Services (AWS Bedrock), Git & CI/CD Basics

### 資料科學與演算法 (Data Science)

Time Series Forecasting (LSTM), Custom Loss Function Design, Explainable AI (XAI / LIME), Data Engineering & ETL (Databricks / SQL), Algorithm Optimization (Genetic Algorithm)

### 技術領導力 (Leadership)

Technical Project Management, Cross-functional Team Leadership, AI Strategy Planning, Problem Solving & RCA
