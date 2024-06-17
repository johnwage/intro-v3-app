import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  return NextResponse.json({ message: 'hello' })
}

export const POST = async (request: Request) => {
  // Get (json) request off the Request object body
  const data = await request.json()
  // Respond with (json) message of that data back
  return NextResponse.json({ message: data })
}
