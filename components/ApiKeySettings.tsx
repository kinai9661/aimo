'use client'
import { useState } from 'react'

export default function ApiKeySettings({
  onApiKeyChange,
}: {
  onApiKeyChange: (key: string) => void
}) {
  const [apiKey, setApiKey] = useState('')
  const [showKey, setShowKey] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    localStorage.setItem('api_key', apiKey)
    onApiKeyChange(apiKey)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleLoad = () => {
    const saved = localStorage.getItem('api_key')
    if (saved) {
      setApiKey(saved)
      onApiKeyChange(saved)
    }
  }

  const handleClear = () => {
    setApiKey('')
    localStorage.removeItem('api_key')
    onApiKeyChange('')
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">API KEY 設定</h2>
        <button
          onClick={() => setShowKey(!showKey)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          {showKey ? '隱藏' : '顯示'}
        </button>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          API Key
        </label>
        <input
          type={showKey ? 'text' : 'password'}
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
          placeholder="輸入您的 API Key..."
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSave}
          className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 font-semibold transition-colors"
        >
          {saved ? '✓ 已保存' : '保存'}
        </button>
        <button
          onClick={handleLoad}
          className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 font-semibold transition-colors"
        >
          載入
        </button>
        <button
          onClick={handleClear}
          className="flex-1 bg-red-100 text-red-600 py-2 rounded-lg hover:bg-red-200 font-semibold transition-colors"
        >
          清除
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
        <p className="font-semibold mb-1">OpenAI Compatible API 端點：</p>
        <p className="font-mono text-xs">POST /api/v1/images/generations</p>
        <p className="font-mono text-xs">GET /api/v1/models</p>
      </div>
    </div>
  )
}
