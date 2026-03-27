import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = authHeader?.replace('Bearer ', '')

  if (!apiKey) {
    return NextResponse.json(
      { error: { message: 'Missing API key' } },
      { status: 401 }
    )
  }

  const body = await req.json()
  const { prompt, model, size, quality, n, response_format } = body

  if (!prompt) {
    return NextResponse.json(
      { error: { message: 'Missing required parameter: prompt' } },
      { status: 400 }
    )
  }

  const payload = {
    prompt,
    model: model || 'seedream_5_0_lite',
    size: size || '16:9',
    quality: quality || '4K',
    n: n || 1,
    response_format: response_format || 'url',
  }

  try {
    const res = await fetch('https://image.kawayi.shop/task/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json(
        { error: { message: data.error || 'Image generation failed' } },
        { status: res.status }
      )
    }

    // 轉換為 OpenAI 格式
    const imageUrl = data.url || data.data?.[0]?.url
    const openaiResponse = {
      created: Math.floor(Date.now() / 1000),
      data: [
        {
          url: imageUrl,
          b64_json: null,
        },
      ],
    }

    return NextResponse.json(openaiResponse)
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          message: error instanceof Error ? error.message : 'Internal server error',
        },
      },
      { status: 500 }
    )
  }
}
