let initialState = {};

export default function reducer(state = initialState, action) {
    let regBtnReducer = (currentState = {}, action) => {
        switch (action.type) {
            case 'REG_BTN_CLICK':
                return {
                    ...currentState,
                    message: action.message,
                };
                break;
            default:
                return currentState;
        }
    };

    return state;
}
