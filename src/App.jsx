import "./App.css";
import { TodoList } from "./components/TodoList";

const App = () => {
  return (
    <div className="p-16 h-screen bg-stone-400 flex flex-col justify-center items-center gap-4">
      <p className="text-6xl font-bold text-white">Todo List :</p>

      <TodoList />
    </div>
  );
};

export default App;
