import { useReducer, useState } from "react";
import { Todo } from "./Todo";
import { initialState, TodosReducer } from "../reducers/TodosReducer";
import { AddTodo, DeleteTodo } from "../actions/TodosActions";

export const TodoList = () => {
  //const [todoList,features] = useReducer(functionalities, InitialValue)
  const [state, dispatch] = useReducer(TodosReducer, initialState);
  const [inputState, setInputState] = useState("");

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
        onClick={() => {
          dispatch(AddTodo(inputState));
          setInputState("");
        }}
        className="w-full px-4 py-2 bg-stone-800 text-white rounded-xl text-lg font-semibold hover:bg-stone-700 transition-colors"
      >
        Add Todo
      </button>
      <ul className="space-y-3">
        {state &&
          state.map((todo) => (
            <Todo
              title={todo.title}
              id={todo.id}
              deleteOne={() => dispatch(DeleteTodo(todo.id))}
              key={todo.id}
            />
          ))}
      </ul>
    </div>
  );
};
