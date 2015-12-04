import {
    UPLOAD_IMG_UPDATED,
} from '../actions/gallery-actions.jsx';

export const galleryReducers = (
    currentState = {
        currentUploadImg: 'No Image Selected',
    }, action
) => {
    switch (action.type) {
        case UPLOAD_IMG_UPDATED:
            return {
                    ...currentState,
                    currentUploadImg: action.currentUploadImg,
                };
            break;
        default:
            return currentState;
    }
};
