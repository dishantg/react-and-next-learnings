import React, { useState } from "react";
import Todo from "../models/todo";


const DUMMY_TODOS = [
    new Todo("Learn React"),
    new Todo("Learn JSX"),
    new Todo("Learn Typescript")
];

export const TodosContext = React.createContext<{
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}>({
    items: DUMMY_TODOS,
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {

  const [todos, setTodos] = useState<Todo[]>(DUMMY_TODOS);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    });
  }

  const handleRemoveTodo = (id: string) => {
    setTodos((prevTodos)=>{
      const updatedTodos = prevTodos.filter(todo => todo.id !== id);
      return updatedTodos;
    });
  }

  const ctxValue = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo
  }

  return <TodosContext.Provider value={ctxValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider;