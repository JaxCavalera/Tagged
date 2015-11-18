let initialState = {};

let regBtnReducer = (initialState, action) => {
    switch (action.type) {
        case 'REG_BTN_CLICK':
            return {
                ...state,
                message: action.message,
            };
            break;
        default:
            return state;
    }
};

export default function reducer(state = initialState, action) {
    return state;
}
