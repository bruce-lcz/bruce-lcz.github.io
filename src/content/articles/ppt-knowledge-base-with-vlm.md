---
title: "企業地端 LLM 平台：從部署到內部落地 (PPT Knowledge Base with VLM)"
description: "整理企業在無外網環境建置地端 LLM 時，需要處理的模型服務、權限、文件流程與使用者體驗。實踐 PowerPoint Knowledge Base 案例。"
publishedAt: 2026-07-22
draft: false
type: case-study
category: enterprise-ai
tags:
  - on-prem-llm
  - vlm
  - knowledge-base
---

## 為什麼需要地端 LLM 平台？

在企業環境中，許多內部文件（如財務報表、機密專案計畫、客戶資料等）無法上傳至公有雲。因此，建立一套完全在**地端 (On-Premises)** 運作的 LLM 平台，是許多企業導入 AI 的必經之路。

### 主要挑戰

1. **硬體資源限制**：無法像雲端一樣動態擴展 GPU。
2. **多模態需求**：除了純文本，企業有大量 PDF、PPT、Word 文件，甚至包含複雜的圖表與架構圖。
3. **權限管控**：必須與企業原有的 AD/LDAP 整合。

---

## 架構設計與 VLM 的應用

為了解決 PowerPoint (PPT) 中豐富的圖表資訊提取，我們導入了 **Vision-Language Model (VLM)**。傳統的 RAG 系統只能處理文字，對於 PPT 內的流程圖、架構圖束手無策。

### 核心流程

| Field | Description |
|---|---|
| issue | 解決 PPT 內部圖表無法被傳統 RAG 搜尋的問題 |
| owner | AI 基礎架構團隊 |
| goal | 建立可視覺化檢索的 Knowledge Base |

架構圖示意（使用 mermaid）：

```mermaid
graph TD;
    A[User Query] --> B(Embedding Model);
    B --> C{Vector DB};
    C -->|Top K| D[VLM (Qwen-VL / LLaVA)];
    D --> E[Final Answer];
```

### 系統配置範例

我們使用以下 Python 腳本來提取投影片資訊：

```python
import os
from vlm_module import VisionModel

prompt = """
Extract issue information from the slide.
If the confidence > 0.8, generate the summary.
"""

def process_slide(image_path):
    model = VisionModel.load("local-vlm-7b")
    result = model.generate(image_path, prompt)
    
    if result.confidence > 0.8:
        print("當 `confidence > 0.8` 時才自動產生結論。")
    return result
```

> **注意**：當 `confidence > 0.8` 時才自動產生結論，這對於避免幻覺 (Hallucination) 非常關鍵。

## 結論

地端 LLM 不僅僅是把模型下載到伺服器上，更重要的是解決企業**多模態文件處理**的痛點。結合 VLM 與 RAG，能大幅提升 Knowledge Base 的可用性。
