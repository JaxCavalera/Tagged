import {
    UPLOAD_IMG_UPDATED,
    START_IMG_UPLOAD,
    SET_GALLERY_IMG_LIST,
    IMG_VIEW_INSTANCES_VALUE,
} from '../actions/gallery-actions.jsx';

export const galleryReducers = (
    currentState = {
        currentUploadImg: 'No Image Selected',
        currentUploadSrc: '',
        galleryImgList: '',
        galleryImageViewInstancesValue: '',
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

        case SET_GALLERY_IMG_LIST:
            return {
                ...currentState,
                galleryImgList: action.galleryImgList,
            };
            break;

        case IMG_VIEW_INSTANCES_VALUE:
            return {
                ...currentState,
                galleryImageViewInstancesValue: action.galleryImageViewInstancesValue,
            };
            break;

        default:
            return currentState;
    }
};
