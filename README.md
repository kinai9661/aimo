# AI 圖片生成站

使用 Next.js 14 + TailwindCSS 構建的 AI 圖片生成應用，支援多個 AI 模型，可直接部署至 Vercel。

支援 OpenAI Compatible API，可與任何 OpenAI SDK 相容的工具整合。

## 功能特性

- 🎨 支援 5 個 AI 模型選擇
  - seedream_5_0_lite
  - seedream_5_0
  - seedream_pro
  - nano_banana_pro
  - nano_banana_2
- 📐 多種圖片尺寸選項 (1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3)
- 🎯 多種品質設定 (1K, 2K, 4K)
- 📊 API 輸出分析面板
- 🔧 curl 指令即時展示
- ⚡ 回應時間統計
- 🚀 一鍵部署至 Vercel

## 快速開始

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 開啟瀏覽器
# http://localhost:3000
```

### 部署至 Vercel

1. 推送至 GitHub
```bash
git init
git add .
git commit -m "init: AI image generator"
git remote add origin https://github.com/YOUR_USERNAME/image-gen-site.git
git push -u origin main
```

2. 前往 [Vercel](https://vercel.com)
3. 點擊 "Import Project"
4. 選擇 GitHub repo
5. 點擊 "Deploy"

## 技術棧

- **框架**: Next.js 14 (App Router)
- **樣式**: TailwindCSS
- **語言**: TypeScript
- **部署**: Vercel

## API 端點

### POST /api/generate

生成圖片

**請求體**:
```json
{
  "prompt": "A cute cat",
  "model": "seedream_5_0_lite",
  "size": "16:9",
  "quality": "4K",
  "n": 1,
  "response_format": "url"
}
```

**回應**:
```json
{
  "success": true,
  "status": 200,
  "elapsed_ms": 1234,
  "payload_sent": {...},
  "response": {...}
}
```

### POST /api/analyze

分析 API 回應

**請求體**:
```json
{
  "response": {...}
}
```

## 環境變數

目前無需環境變數，若 API 日後需要 Authorization Key，可在 Vercel Dashboard 設定。

## OpenAI Compatible API

本應用提供 OpenAI 相容的 API 端點，可與任何 OpenAI SDK 整合。

### 端點

- `GET /api/v1/models` - 列出所有可用模型
- `POST /api/v1/images/generations` - 生成圖片

### 認證

所有請求需要在 Header 中提供 API Key：

```
Authorization: Bearer YOUR_API_KEY
```

### Python 示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://your-domain.com/api/v1"
)

response = client.images.generate(
    model="seedream_5_0_lite",
    prompt="A cute cat wearing sunglasses",
    size="16:9",
    quality="4K",
    n=1
)

print(response.data[0].url)
```

詳細文件請見 `/api-docs` 頁面。

## 注意事項

- Vercel 免費方案 Serverless Function 最長 10 秒超時
- 若生成時間過長，建議升級至 Pro 方案或改用 Edge Runtime
- 圖片 URL 若有防盜鏈限制，可在 `next.config.js` 設定 `images.remotePatterns`

## 授權

MIT
