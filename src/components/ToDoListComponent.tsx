import ToDoItem from './ToDoItem'
import { Todo } from '../types/TodoTypes'

type ToDoListProps = {
  todos: Todo[]
  onCompletedHandle: (id: number, completed: boolean) => void
  onDeleteHandle: (id: number) => void
}

const ToDoListComponent = ({
  todos,
  onCompletedHandle,
  onDeleteHandle,
}: ToDoListProps) => {
  // Sort todos by completed status and then by id in descending order
  const toDosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id
    }

    return a.completed ? 1 : -1
  })

  return (
    <>
      <div>
        {toDosSorted.map((todo) => (
          <div key={todo.id} className="py-2">
            <ToDoItem
              todo={todo}
              onCompletedHandle={onCompletedHandle}
              onDeleteHandle={onDeleteHandle}
            />
          </div>
        ))}
      </div>
      {todos.length === 0 && (
        <div className="text-2xl shadow-2xl font-semibold mt-2 bg-gradient-to-r from-slate-900 to-slate-700 inline-block text-transparent bg-clip-text">
          All tasks are solved
        </div>
      )}
    </>
  )
}

export default ToDoListComponent
