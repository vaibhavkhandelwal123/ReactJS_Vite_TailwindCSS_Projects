import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (Todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, Todo) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
