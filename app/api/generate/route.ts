import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const payload = {
    prompt: body.prompt,
    model: body.model || 'seedream_5_0_lite',
    size: body.size || '16:9',
    quality: body.quality || '4K',
    n: body.n || 1,
    response_format: body.response_format || 'url',
  }

  const startTime = Date.now()

  try {
    const res = await fetch('https://image.kawayi.shop/task/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const elapsed = Date.now() - startTime
    const data = await res.json()

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      elapsed_ms: elapsed,
      payload_sent: payload,
      response: data,
    })
  } catch (error) {
    const elapsed = Date.now() - startTime
    return NextResponse.json(
      {
        success: false,
        status: 500,
        elapsed_ms: elapsed,
        payload_sent: payload,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
