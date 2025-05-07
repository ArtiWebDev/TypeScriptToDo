import { toDoData } from '@/Data/todos'
import { Todo } from '@/types/TodoTypes'
import { useEffect, useState } from 'react'

export default function useToDoHook() {
  const [todos, setTodos] = useState(() => {
    const storedTodos: Todo[] = JSON.parse(
      localStorage.getItem('todos') || '[]'
    )
    return storedTodos.length > 0 ? storedTodos : toDoData
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    )
  }

  function addToDo(title: string) {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodos,
    ])
  }

  function deleteToDo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  function deleteAllCompletedTasks() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
  }
  return {
    todos,
    setToDoCompleted,
    addToDo,
    deleteToDo,
    deleteAllCompletedTasks,
  }
}
