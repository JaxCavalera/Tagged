import {
    REG_ATTEMPT,
} from '../actions/gallery-actions.jsx';

// import {UPDATE_PATH} from 'redux-simple-router';

export const galleryReducers = (
    currentState = {

    }, action
) => {
    switch (action.type) {
        case REG_ATTEMPT:
            return {
                    ...currentState,
                    prevRegAttempt: action.prevRegAttempt,
                };
            break;
        default:
            return currentState;
    }
};
