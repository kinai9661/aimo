import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 圖片生成站',
  description: '使用 AI 模型生成高品質圖片',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
