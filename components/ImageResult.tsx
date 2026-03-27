'use client'
import Image from 'next/image'

export default function ImageResult({ result }: { result: any }) {
  const url =
    result?.response?.url ||
    result?.response?.data?.[0]?.url ||
    null

  if (!url) {
    return (
      <div className="bg-red-50 text-red-600 rounded-xl p-4 border border-red-200">
        無法取得圖片 URL，請查看 API 分析面板
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">生成結果</h2>
      <div className="relative w-full h-96">
        <Image
          src={url}
          alt="Generated"
          fill
          className="rounded-xl object-contain"
        />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 text-sm mt-2 block hover:underline"
      >
        開啟原始圖片
      </a>
    </div>
  )
}
