export const AddTodo = (inputState) => {
  return { type: "addTodo", payload: inputState };
};
export const DeleteTodo = (id) => {
  return { type: "deleteTodo", payload: id };
};
