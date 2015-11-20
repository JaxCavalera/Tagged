import {REG_BTN_CLICK, UNAME_INPUT_EVENT} from '../actions/auth-actions.jsx';

export const regBtnReducer = (currentState = {}, action) => {
    switch (action.type) {
        case REG_BTN_CLICK:
            return {
                    ...currentState,
                    message: action.message,
                };
            break;
        case UNAME_INPUT_EVENT:
            return {
                    ...currentState,
                    message: action.message,
                };
            break;
        default:
            return currentState;
    }
};
