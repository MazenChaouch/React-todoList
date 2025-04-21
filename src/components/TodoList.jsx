import { useEffect, useState } from "react"
import { Todo } from "./todo"

export const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    const [inputState, setInputState] = useState("")

    const addTodo = () => {
        let id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1
        setTodoList([...todoList, { id, title: inputState }])
        setInputState("")
    }

    const deleteTodo = (id) => {
        let templist = todoList.filter((todo) => todo.id != id)
        console.log(templist)
        setTodoList(templist)

    }

    useEffect(() => {
        setTodoList(JSON.parse(localStorage.getItem("todos")) || [])
        return () => { console.log("Component deleted!") }
    }, [])

    useEffect(() => {
        if (todoList.length) localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])

    useEffect(() => {
        console.log("Component rendered!")
    })

    return (
        <div className="flex flex-col gap-4">
            <input type="text" value={inputState} className="bg-white px-2 py-2 text-xl rounded-xl border text-black" onChange={(e) => setInputState(e.target.value)} />
            <button className="px-4 py-1 bg-stone-800 text-white rounded-xl text-lg font-medium" onClick={addTodo}>Add Todo</button>
            <ul className="space-y-1">
                {todoList && todoList.map((todo) => {
                    return <Todo title={todo.title} id={todo.id} deleteOne={deleteTodo} key={todo.id} />
                })}
            </ul>
        </div>
    )
}
