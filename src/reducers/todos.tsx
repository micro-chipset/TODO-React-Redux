export let maxId = 10;

const createTodoItem = (label, id = maxId++) => {
    return {
        label,
        important: false,
        done: false,
        id
    };
};

const initalState = [
    createTodoItem("Task 1"),
    createTodoItem("Task 2"),
    createTodoItem("Task 3"),
    createTodoItem("Task 4"),
    createTodoItem("Task 5")
];

const todos = (state = initalState, action) => {

    switch (action.type) {
        case 'TOGGLE_ADD':
            return [
                ...state,
                {
                    id: action.id,
                    label: action.label,
                    important: false,
                    done: false
                }
            ];
        case 'TOGGLE_EDIT':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, label: action.label}
                    : todo
            );

        case 'TOGGLE_DEL':
            const idx = state.findIndex((el) => el.id === action.id);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ];

        case 'TOGGLE_IMPORTANT':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, important: !todo.important}
                    : todo
            );

        case 'TOGGLE_DONE':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, done: !todo.done}
                    : todo
            );

        default:
            return state
    }
};

export default todos
