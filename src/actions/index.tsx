import {maxId}   from "../reducers/todos"

let nextTodoId: number = maxId;

export const toggleAdd = (label: string) => ({
    type: 'TOGGLE_ADD',
    id: nextTodoId++,
    label
});

export const toggleEdit = (id: number, label: string) => ({
    type: 'TOGGLE_EDIT',
    id,
    label
});

export const setVisibilityFilter = (filter: string) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const setVisibilitySearch = (search: string) => ({
    type: 'SET_VISIBILITY_SEARCH',
    search
});

export const toggleDone = (id: number) => ({
    type: 'TOGGLE_DONE',
    id
});

export const toggleDel = (id: number) => ({
    type: 'TOGGLE_DEL',
    id
});

export const toggleImportant = (id: number) => ({
    type: 'TOGGLE_IMPORTANT',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
