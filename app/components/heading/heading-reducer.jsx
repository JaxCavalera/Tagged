let initialState = {};

let regBtnReducer = (initialState, action) => {
    switch (action.type) {
        case 'REG_BTN_CLICK':
            return {
                ...initialState,
                message: action.message,
            };
            break;
        default:
            return initialState;
    }
};

export default function reducer(state = initialState, action) {
    return state;
}
