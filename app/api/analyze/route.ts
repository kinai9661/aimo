import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { response } = await req.json()

  const analysis = {
    has_url: !!(response?.url || response?.data?.[0]?.url),
    has_error: !!response?.error,
    image_count: response?.data?.length ?? (response?.url ? 1 : 0),
    fields: Object.keys(response || {}),
    status_hint: response?.error
      ? 'error'
      : response?.url || response?.data
        ? 'success'
        : 'unknown',
  }

  return NextResponse.json({ analysis })
}
