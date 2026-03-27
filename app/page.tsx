import Link from 'next/link'
import GenerateForm from '@/components/GenerateForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6 mb-6 flex justify-end">
        <Link
          href="/api-docs"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold transition-colors"
        >
          API 文件
        </Link>
      </div>
      <GenerateForm />
    </main>
  )
}
