import {REG_ATTEMPT, LOG_ATTEMPT, UNAME_INPUT_EVENT, PWORD_INPUT_EVENT} from '../actions/auth-actions.jsx';

export const authReducers = (
    currentState = {
        unameValue: 'Username',
        pwordValue: '',
        logStatus: '',
        regStatus: '',
        prevRegAttempt: '',
    }, action
) => {
    switch (action.type) {
        case REG_ATTEMPT:
            return {
                    ...currentState,
                    regStatus: action.regStatus,
                    logStatus: action.regStatus,
                    prevRegAttempt: action.prevRegAttempt,
                };
            break;
        case LOG_ATTEMPT:
            return {
                    ...currentState,
                    logStatus: action.logStatus,
                    prevRegAttempt: action.prevRegAttempt,
                };
            break;
        case UNAME_INPUT_EVENT:
            return {
                    ...currentState,
                    unameValue: action.unameValue,
                    logStatus: '',
                    regStatus: '',
                };
            break;
        case PWORD_INPUT_EVENT:
            return {
                    ...currentState,
                    pwordValue: action.pwordValue,
                    logStatus: '',
                };
            break;
        default:
            return currentState;
    }
};
