import './App.css'
import AddToDoForm from './components/AddToDoForm'
import CounterComponent from './components/CounterComponent'
import ToDoListComponent from './components/ToDoListComponent'

import useToDoHook from './customHooks/useToDoHook'

function App() {
  const {
    todos,
    setToDoCompleted,
    addToDo,
    deleteToDo,
    deleteAllCompletedTasks,
  } = useToDoHook()

  return (
    <>
      <div className="py-12 h-screen overflow-y-auto">
        <div className="flex justify-center flex-col items-center">
          <p className="text-4xl font-bold mt-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Tasks Appication
          </p>
          <p className="text-base font-semibold mt-2 bg-gradient-to-r from-red-500  via-orange-500 to-red-500 inline-block text-transparent bg-clip-text">
            powered by: TypeScript, React & Tailwind
          </p>
          <div>
            <div className="flex flex-col items-center justify-center mt-6 gap-6 bg-gradient-to-r from-indigo-500 to-blue-500 p-5 rounded-lg ">
              <div>
                <AddToDoForm onSubmit={addToDo} />
              </div>

              <ToDoListComponent
                todos={todos}
                onCompletedHandle={setToDoCompleted}
                onDeleteHandle={deleteToDo}
              />
            </div>
            <CounterComponent
              todos={todos}
              deleteAllCompletedTasks={deleteAllCompletedTasks}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
