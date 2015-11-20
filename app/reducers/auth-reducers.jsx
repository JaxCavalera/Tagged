import {REG_BTN_CLICK, UNAME_INPUT_EVENT} from '../actions/auth-actions.jsx';

export const authReducers = (currentState = {value: ''}, action) => {
    console.log(currentState);
    switch (action.type) {
        case REG_BTN_CLICK:
            return {
                    ...currentState,
                    clicked: action.clicked,
                };
            break;
        case UNAME_INPUT_EVENT:
            return {
                    ...currentState,
                    value: action.value,
                };
            break;
        default:
            return currentState;
    }
};
