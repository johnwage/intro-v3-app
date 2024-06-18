import { NextResponse } from 'next/server'
import db from '@/utils/db'

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({})
  // Respond with (json) message containing entire list of todos
  return NextResponse.json({ message: todos })
}

export const POST = async (request: Request) => {
  // Get (json) request off the Request object body
  const data = await request.json()
  // Create todo in db
  const todo = await db.todo.create({
    data,
  })
  // Respond with (json) message of that todo back
  return NextResponse.json({ message: todo })
}
