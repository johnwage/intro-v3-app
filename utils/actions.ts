'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const newToDo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })

  // makes the todos page reload after a new todo is created in db
  // expires the cache of that page, which forces it to refetch its data
  revalidatePath('/todos')
}
