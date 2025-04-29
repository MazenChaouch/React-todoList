import { useEffect, useState } from "react";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputState, setInputState] = useState("");

  const addTodo = () => {
    let id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
    setTodoList([...todoList, { id, title: inputState }]);
    setInputState("");
  };

  const deleteTodo = (id) => {
    let templist = todoList.filter((todo) => todo.id != id);
    console.log(templist);
    setTodoList(templist);
  };

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todos")) || []);
    return () => {
      console.log("Component deleted!");
    };
  }, []);

  useEffect(() => {
    if (todoList.length)
      localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    console.log("Component rendered!");
  });

  return (
    <div className="flex flex-col gap-5 p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-md border border-gray-200">
      <input
        type="text"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
        placeholder="Enter a new todo..."
        className="w-full bg-white px-4 py-3 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500 text-black placeholder:text-gray-500"
      />
      <button
        onClick={addTodo}
        className="w-full px-4 py-2 bg-stone-800 text-white rounded-xl text-lg font-semibold hover:bg-stone-700 transition-colors"
      >
        Add Todo
      </button>
      <ul className="space-y-3">
        {todoList &&
          todoList.map((todo) => (
            <Todo
              title={todo.title}
              id={todo.id}
              deleteOne={deleteTodo}
              key={todo.id}
            />
          ))}
      </ul>
    </div>
  );
};
