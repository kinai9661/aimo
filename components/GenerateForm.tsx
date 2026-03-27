'use client'
import { useState } from 'react'
import CurlDisplay from './CurlDisplay'
import ImageResult from './ImageResult'
import ApiAnalyzer from './ApiAnalyzer'
import ApiKeySettings from './ApiKeySettings'

const MODELS = [
  'seedream_5_0_lite',
  'seedream_5_0',
  'seedream_pro',
  'nano_banana_pro',
  'nano_banana_2',
]
const SIZES = ['1:1', '16:9', '9:16', '4:3', '3:4', '3:2', '2:3']
const QUALITIES = ['1K', '2K', '4K']

export default function GenerateForm() {
  const [form, setForm] = useState({
    prompt: '',
    model: 'seedream_5_0_lite',
    size: '16:9',
    quality: '4K',
    n: 1,
    response_format: 'url',
  })
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.prompt.trim()) {
      alert('請輸入提示詞')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setResult(data)
    } catch (error) {
      alert('請求失敗，請重試')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">AI 圖片生成站</h1>
        <p className="text-gray-600 mt-2">使用先進 AI 模型生成高品質圖片</p>
      </div>

      {/* API KEY 設定 */}
      <ApiKeySettings onApiKeyChange={() => {}} />

      {/* 表單 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            提示詞 (Prompt)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="例如：A cute cat wearing sunglasses..."
            value={form.prompt}
            onChange={e => setForm({ ...form, prompt: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              模型
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.model}
              onChange={e => setForm({ ...form, model: e.target.value })}
            >
              {MODELS.map(m => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              尺寸
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.size}
              onChange={e => setForm({ ...form, size: e.target.value })}
            >
              {SIZES.map(s => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              品質
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.quality}
              onChange={e => setForm({ ...form, quality: e.target.value })}
            >
              {QUALITIES.map(q => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !form.prompt.trim()}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
        >
          {loading ? '生成中...' : '生成圖片'}
        </button>
      </div>

      {/* curl 展示 */}
      <CurlDisplay form={form} />

      {/* 結果 */}
      {result && (
        <>
          <ImageResult result={result} />
          <ApiAnalyzer result={result} />
        </>
      )}
    </div>
  )
}
