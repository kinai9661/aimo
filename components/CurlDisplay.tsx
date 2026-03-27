'use client'

export default function CurlDisplay({ form }: { form: any }) {
  const curl = `curl -X POST "https://image.kawayi.shop/task/submit" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(form, null, 2)}'`

  return (
    <div className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm overflow-x-auto font-mono">
      <div className="text-gray-400 mb-2 text-xs">等效 curl 指令：</div>
      <pre className="whitespace-pre-wrap break-words">{curl}</pre>
    </div>
  )
}
