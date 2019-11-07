import * as React from "react";
import {withRouter} from 'react-router-dom'

import "./todo-list-item-button-edit.css"

const TodoListItemButtonEdit = withRouter(({history, id}) => (

    <button type="button" className="button button-edit"
            onClick={() => {
                history.push(`/edit/:${id}`)
            }}>
        <i className="fa fa-edit" />
    </button>
));

export default TodoListItemButtonEdit;
