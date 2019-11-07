import {connect} from 'react-redux'
import {toggleDone, toggleDel, toggleImportant} from '../../actions'
import TodoList from '../../components/todo-list/todo-list'
import {VisibilityFilters} from '../../actions'

const getVisibleTodos = (todos, filter) => {

    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;

        case VisibilityFilters.SHOW_DONE:
            return todos.filter(t => t.done);

        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.done);

        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const getVisibleSearch = (todos, search) => {
    if (search.length === 0) {
        return todos;
    }

    return todos.filter((el) => {
        return el.label
            .toLowerCase()
            .indexOf(search.toLowerCase()) > -1;
    })
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(getVisibleSearch(state.todos, state.visibilitySearch), state.visibilityFilter)
});


const mapDispatchToProps = dispatch => ({
    toggleDone: id => dispatch(toggleDone(id)),
    toggleDel: id => dispatch(toggleDel(id)),
    toggleImportant: id => dispatch(toggleImportant(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)