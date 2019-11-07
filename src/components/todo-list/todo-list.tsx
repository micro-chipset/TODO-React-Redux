import * as React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({todos, toggleDone, toggleDel, toggleImportant}) => {
    const elements = todos.map((item) => {
        const {id} = item;

        return (
            <li key={id} className="todo-list-group-item">
                <TodoListItem
                    {...item}
                    onToggleDone={() => toggleDone(id)}
                    onToggleDel={() => toggleDel(id)}
                    onToggleImportant={() => toggleImportant(id)} />
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;
