import * as React from "react";

import "./todo-list-item-button-del.css"

const TodoListItemButtonDel = ({action}) => {
    return (
            <button type="button" className="button button-del"
                    onClick={action}>
                <i className="fa fa-trash-alt" />
            </button>
    )
};

export default TodoListItemButtonDel;
