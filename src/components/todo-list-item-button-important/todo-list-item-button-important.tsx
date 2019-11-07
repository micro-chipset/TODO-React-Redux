import * as React from "react";

import "./todo-list-item-button-important.css"

const TodoListItemButtonImportant = ({onToggleImportant}) => {

    return (
        <button type="button" className="button button-important"
                onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
        </button>
    )
};

export default TodoListItemButtonImportant;
