import {
    UPLOAD_IMG_UPDATED,
    START_IMG_UPLOAD,
} from '../actions/gallery-actions.jsx';

export const galleryReducers = (
    currentState = {
        currentUploadImg: 'No Image Selected',
        currentUploadSrc: 'Img: None',
    }, action
) => {
    switch (action.type) {
        case UPLOAD_IMG_UPDATED:
            return {
                    ...currentState,
                    currentUploadImg: action.currentUploadImg,
                    currentUploadSrc: action.currentUploadSrc,
                };
            break;
        case START_IMG_UPLOAD:
            return {
                    ...currentState,
                    uploadStatus: action.uploadStatus,
                };
            break;
        default:
            return currentState;
    }
};
