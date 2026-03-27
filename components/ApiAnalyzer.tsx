'use client'

export default function ApiAnalyzer({ result }: { result: any }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-3">
      <h2 className="text-xl font-semibold">API 輸出分析</h2>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-gray-500 text-xs">HTTP 狀態</div>
          <div className="font-medium mt-1">{result.status}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-gray-500 text-xs">回應時間</div>
          <div className="font-medium mt-1">{result.elapsed_ms} ms</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 col-span-2">
          <div className="text-gray-500 text-xs mb-1">傳送 Payload</div>
          <pre className="text-xs overflow-x-auto font-mono">
            {JSON.stringify(result.payload_sent, null, 2)}
          </pre>
        </div>
      </div>

      <div>
        <div className="text-gray-500 text-xs mb-1">Raw Response JSON：</div>
        <pre className="bg-gray-100 rounded-lg p-3 text-xs overflow-x-auto font-mono">
          {JSON.stringify(result.response, null, 2)}
        </pre>
      </div>
    </div>
  )
}
