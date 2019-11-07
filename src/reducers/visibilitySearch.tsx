const visibilitySearch = (state = "", action) => {

    switch (action.type) {
        case 'SET_VISIBILITY_SEARCH':
            return action.search;
        default:
            return state
    }
};

export default visibilitySearch
