import { Todo } from '@/types/TodoTypes'

type CounterProps = {
  todos: Todo[]
  deleteAllCompletedTasks: () => void
}

function CounterComponent({ todos, deleteAllCompletedTasks }: CounterProps) {
  const completedTasks = todos.filter((todo) => todo.completed)
  return (
    <div className="text-center mt-3 font-semibold text-xl bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
      <p>
        {completedTasks.length} Tasks from {todos.length} completed
      </p>

      <div>
        {completedTasks.length > 0 && (
          <button onClick={deleteAllCompletedTasks} className="btn-cancel mt-3">
            Delete all completed Tasks
          </button>
        )}
      </div>
    </div>
  )
}

export default CounterComponent
