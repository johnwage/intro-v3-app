import db from '@/utils/db'
import TodoList from '@/components/TodoList'

const getData = async () => {
  // await new Promise((resolve, reject) => setTimeout(() => reject(), 2000))
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const todos = await db.todo.findMany({})
  return todos
}

const ToDosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default ToDosPage
