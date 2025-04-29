// get my previeus todoList if existed or an empty array as our initial state
export const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const TodosReducer = (state, action) => {
  switch (action.type) {
    case "addTodo": {
      // generate an id for my Todo
      let id = state.length ? state[state.length - 1].id + 1 : 1;
      // create temp state to update local storage and the actual state
      const tempState = [...state, { id, title: action.payload }];
      localStorage.setItem("todos", JSON.stringify(tempState));
      return tempState;
    }
    case "deleteTodo": {
      // create tamp state while removing the todo
      const tempState = state.filter((todo) => todo.id != action.payload);
      // save the new state to localstorage and the actual state
      localStorage.setItem("todos", JSON.stringify(tempState));
      return tempState;
    }
    default: {
      throw new Error("this action is invalid!");
    }
  }
};
