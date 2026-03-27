import { NextResponse } from 'next/server'

export async function GET() {
  const models = [
    {
      id: 'seedream_5_0_lite',
      object: 'model',
      created: 1704067200,
      owned_by: 'seedream',
      permission: [],
      root: 'seedream_5_0_lite',
      parent: null,
    },
    {
      id: 'seedream_5_0',
      object: 'model',
      created: 1704067200,
      owned_by: 'seedream',
      permission: [],
      root: 'seedream_5_0',
      parent: null,
    },
    {
      id: 'seedream_pro',
      object: 'model',
      created: 1704067200,
      owned_by: 'seedream',
      permission: [],
      root: 'seedream_pro',
      parent: null,
    },
    {
      id: 'nano_banana_pro',
      object: 'model',
      created: 1704067200,
      owned_by: 'banana',
      permission: [],
      root: 'nano_banana_pro',
      parent: null,
    },
    {
      id: 'nano_banana_2',
      object: 'model',
      created: 1704067200,
      owned_by: 'banana',
      permission: [],
      root: 'nano_banana_2',
      parent: null,
    },
  ]

  return NextResponse.json({
    object: 'list',
    data: models,
  })
}
