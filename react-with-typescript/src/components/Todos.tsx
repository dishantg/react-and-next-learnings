import React, { useContext } from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";
 
 const Todos: React.FC = () => {

  const todoCtx = useContext(TodosContext)

    return <ul className={classes.todos}>
        {todoCtx.items.map(
            (item: Todo) => 
            <TodoItem 
                key={item.id} 
                text={item.text}
                onClick={() => todoCtx.removeTodo(item.id)}
            />)}
    </ul>
}

export default Todos;