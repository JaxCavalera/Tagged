import {AUTH_ATTEMPT, UNAME_INPUT_EVENT, PWORD_INPUT_EVENT} from '../actions/auth-actions.jsx';

export const authReducers = (
    currentState = {
        unameValue: 'Username',
        pwordValue: '',
        status: 'fail',
    }, action
) => {
    switch (action.type) {
        case AUTH_ATTEMPT:
            return {
                    ...currentState,
                    status: action.status,
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
