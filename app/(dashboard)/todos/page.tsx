import db from '@/utils/db'
import TodoList from '@/components/TodoList'

const getData = async () => {
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
