import { useState } from "react"
import "./App.css"
import { TodoList } from "./components/todoList"

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <div className="p-16 h-screen bg-stone-400 flex flex-col justify-center items-center gap-2">
      <p className="text-4xl font-bold">Todo List :</p>

      <button className="px-4 py-1 bg-stone-200 text-black rounded-xl text-lg font-medium" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Todo List
      </button>
      {show && <TodoList />}
    </div>
  )
}

export default App