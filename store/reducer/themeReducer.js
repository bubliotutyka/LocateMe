const initialState = { theme: 'light' };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: action.value,
            }
        default:
            return state;
    }
}