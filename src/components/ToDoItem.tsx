import { Todo } from '../types/TodoTypes'
import { Trash2 } from 'lucide-react'

type ToDoItemProps = {
  todo: Todo
  onCompletedHandle: (id: number, completed: boolean) => void
  onDeleteHandle: (id: number) => void
}

function ToDoItem({ todo, onCompletedHandle, onDeleteHandle }: ToDoItemProps) {
  return (
    <div className="flex">
      <label className="text-lg font-semibold border border-gray-300 rounded-lg flex justify-start items-center gap-5 p-3 w-80 bg-lime-500-500 shadow-lg hover:text-gray-400 hover:bg-slate-800 hover:shadow-lime-600 hover:border-gray-950 transition-colors duration-500">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedHandle(todo.id, e.target.checked)}
          className="scale-100 peer h-5 w-5 cursor-pointer bg-gray-400 transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-lime-700 checked:border-lime-900"
          id="check4"
        />
        <span
          className={
            todo.completed ? 'line-through text-red-600 hover:text-lg' : ''
          }
        >
          {todo.title}
        </span>
        <h2 className=""></h2>
      </label>

      {/* onClick={onDeleteHandle(todo.id) */}

      <button className="btn-cancel" onClick={() => onDeleteHandle(todo.id)}>
        <Trash2 />
      </button>
    </div>
  )
}

export default ToDoItem
