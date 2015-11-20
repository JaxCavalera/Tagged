import {REG_BTN_CLICK, UNAME_INPUT_EVENT, PWORD_INPUT_EVENT} from '../actions/auth-actions.jsx';

export const authReducers = (currentState = {unameValue: 'Username', pwordValue: ''}, action) => {
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
                    unameValue: action.value,
                };
            break;
        case PWORD_INPUT_EVENT:
            return {
                    ...currentState,
                    pwordValue: action.value,
                };
            break;
        default:
            return currentState;
    }
};
