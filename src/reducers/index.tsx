import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import visibilitySearch from "./visibilitySearch";

export default combineReducers({
    todos,
    visibilityFilter,
    visibilitySearch
})
