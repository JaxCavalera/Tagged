import {REG_BTN_CLICK} from '../actions/auth-actions.jsx';

let initialState = {};

let regBtnReducer = (currentState = {}, action) => {
    switch (action.type) {
        case REG_BTN_CLICK:
            return {
                    ...currentState,
                    message: action.message,
                };
            break;
        default:
            return currentState;
    }
};

export default {
    regBtnReducer,
};
