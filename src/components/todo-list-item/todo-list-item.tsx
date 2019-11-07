import * as React from "react";
import "./todo-list-item.css";
import TodoListItemButtonEdit from "../todo-list-item-button-edit/todo-list-item-button-edit";
import TodoListItemButtonDel from "../todo-list-item-button-del/todo-list-item-button-del";
import TodoListItemButtonImportant from "../todo-list-item-button-important/todo-list-item-button-important";
import wrapButton from "../wrap-button/wrap-button";

const TodoListItem = ({label, id, important, done, onToggleDone, onToggleDel, onToggleImportant}) => {
    let classNames: string = "todo-list-item";

    if (done) {
        classNames += " done";
    }

    if (important) {
        classNames += " important";
    }

    const WrapButtonDel = wrapButton(TodoListItemButtonDel, onToggleDel);

    return (
        <span className={classNames}>
        <span className="todo-list-item-label"
              onClick={onToggleDone}>
          {label}
        </span>

        <span>
            <TodoListItemButtonEdit id={id} />

            <WrapButtonDel />

            <TodoListItemButtonImportant onToggleImportant={onToggleImportant} />
        </span>
      </span>
    );
};

export default TodoListItem;
