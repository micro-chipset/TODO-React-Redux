import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {toggleEdit} from "../../actions";

import "./todo-list-item-edit.css"

const TodoListItemEdit = ({todoData, match, toggleEdit, history }) => {
    let input;
    const {id} = match.params;
    let idx = +id.slice(1);
    const res = todoData.filter(el => el.id === idx);
    const {label} = res[0];

    const onSubmitItemEdit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();

        if (!input.value.trim()) return;

        toggleEdit(idx, input.value);
        history.push('/')
    };

    return (
        <form className="todo-list-item-edit"
              onSubmit={onSubmitItemEdit}
        >
            <div className="form-field">
                <input type='text'
                       className='form-edit'
                       ref={node => input = node}
                       defaultValue={label}
                />
            </div>
            <button className="button">Save</button>
        </form>
    )
};

const mapStateToProps = state => ({
    todoData: state.todos
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({toggleEdit}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItemEdit)