import Link from 'next/link'

export default function ApiDocs() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">API 文件</h1>
          <p className="text-gray-600 mt-2">OpenAI Compatible API 端點</p>
        </div>

        <Link
          href="/"
          className="inline-block text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          ← 返回主頁
        </Link>

        {/* GET /v1/models */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">GET /v1/models</h2>
          <p className="text-gray-600">列出所有可用的 AI 模型</p>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">請求示例：</p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto font-mono">
{`curl -X GET "https://your-domain.com/api/v1/models" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            </pre>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">回應示例：</p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto font-mono">
{`{
  "object": "list",
  "data": [
    {
      "id": "seedream_5_0_lite",
      "object": "model",
      "created": 1704067200,
      "owned_by": "seedream"
    },
    ...
  ]
}`}
            </pre>
          </div>
        </div>

        {/* POST /v1/images/generations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            POST /v1/images/generations
          </h2>
          <p className="text-gray-600">生成圖片</p>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">請求參數：</p>
            <div className="space-y-2 text-sm font-mono">
              <div>
                <span className="text-red-600">prompt</span>
                <span className="text-gray-600"> (string, required)</span>
                <p className="text-gray-600 ml-4">圖片生成提示詞</p>
              </div>
              <div>
                <span className="text-red-600">model</span>
                <span className="text-gray-600"> (string, optional)</span>
                <p className="text-gray-600 ml-4">
                  AI 模型，預設: seedream_5_0_lite
                </p>
              </div>
              <div>
                <span className="text-red-600">size</span>
                <span className="text-gray-600"> (string, optional)</span>
                <p className="text-gray-600 ml-4">
                  圖片尺寸，預設: 16:9
                </p>
              </div>
              <div>
                <span className="text-red-600">quality</span>
                <span className="text-gray-600"> (string, optional)</span>
                <p className="text-gray-600 ml-4">
                  圖片品質，預設: 4K
                </p>
              </div>
              <div>
                <span className="text-red-600">n</span>
                <span className="text-gray-600"> (integer, optional)</span>
                <p className="text-gray-600 ml-4">
                  生成圖片數量，預設: 1
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">請求示例：</p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto font-mono">
{`curl -X POST "https://your-domain.com/api/v1/images/generations" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "prompt": "A cute cat wearing sunglasses",
    "model": "seedream_5_0_lite",
    "size": "16:9",
    "quality": "4K",
    "n": 1
  }'`}
            </pre>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">回應示例：</p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto font-mono">
{`{
  "created": 1704067200,
  "data": [
    {
      "url": "https://example.com/image.jpg",
      "b64_json": null
    }
  ]
}`}
            </pre>
          </div>
        </div>

        {/* Python 示例 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Python 示例</h2>

          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto font-mono">
{`from openai import OpenAI

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

print(response.data[0].url)`}
            </pre>
          </div>
        </div>

        {/* JavaScript 示例 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">JavaScript 示例</h2>

          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto font-mono">
{`const response = await fetch(
  'https://your-domain.com/api/v1/images/generations',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      prompt: 'A cute cat wearing sunglasses',
      model: 'seedream_5_0_lite',
      size: '16:9',
      quality: '4K',
      n: 1
    })
  }
)

const data = await response.json()
console.log(data.data[0].url)`}
            </pre>
          </div>
        </div>

        {/* 可用模型 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">可用模型</h2>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-indigo-600">seedream_5_0_lite</span>
              <span className="text-gray-600">- 輕量級模型</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-indigo-600">seedream_5_0</span>
              <span className="text-gray-600">- 標準模型</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-indigo-600">seedream_pro</span>
              <span className="text-gray-600">- 專業模型</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-indigo-600">nano_banana_pro</span>
              <span className="text-gray-600">- Banana Pro 模型</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-indigo-600">nano_banana_2</span>
              <span className="text-gray-600">- Banana 2 模型</span>
            </div>
          </div>
        </div>

        {/* 可用尺寸 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">可用尺寸</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['1:1', '16:9', '9:16', '4:3', '3:4', '3:2', '2:3'].map(size => (
              <div
                key={size}
                className="bg-gray-50 rounded-lg p-3 text-center font-mono text-sm"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* 可用品質 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">可用品質</h2>

          <div className="grid grid-cols-3 gap-2">
            {['1K', '2K', '4K'].map(quality => (
              <div
                key={quality}
                className="bg-gray-50 rounded-lg p-3 text-center font-mono text-sm"
              >
                {quality}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
