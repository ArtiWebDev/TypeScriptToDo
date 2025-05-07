import { useState } from 'react'

type AddToDoFormProps = {
  onSubmit: (title: string) => void
}

function AddToDoForm({ onSubmit }: AddToDoFormProps) {
  const [input, setInput] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input.trim()) return

    onSubmit(input)
    setInput('')
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="what are you planning to complete?"
        className="rounded-s-md w-84 text-sm grow bg-slate-600 text-slate-200 p-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <div className="">
        <button className="btn-main">ADD</button>
      </div>
    </form>
  )
}

export default AddToDoForm
