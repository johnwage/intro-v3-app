import { newToDo } from '@/utils/actions'

const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newToDo}>
        <input name="content" type="text" className="border border-black/25" />
        <button type="submit">new todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
