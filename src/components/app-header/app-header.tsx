import * as React from "react";
import {connect} from 'react-redux'

import "./app-header.css";

const AppHeader = ({todos}) => {
    const doneCount: number = todos.filter((item) => item.done).length;
    const todoCount: number = todos.length - doneCount;

    return (
        <div className="app-header">
            <h1>Todo List</h1>
            <h2>{todoCount} all, {doneCount} done</h2>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(AppHeader);
