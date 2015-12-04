//  ip and the Promise modules used for Async Promises
import {history} from '../index.jsx';
import Promise from 'bluebird';
import crypto from 'crypto';
import * as constvars from '../constvars.jsx';
const dbServer = constvars.DBSERVER_VAR;

export const UPLOAD_IMG_UPDATED = 'UPLOAD_IMG_UPDATED';

//  =============  Async Action Creators  =============

//  =====  UPLOAD IMAGE UPDATED ASYNC ACTION CREATOR  =====
export const uploadImgUpdatedActionCreator = (imageSrcUrl) => {
    return (dispatch, getState) => {
        dispatch({
            type: UPLOAD_IMG_UPDATED,
            currentUploadImg: imageSrcUrl,
        });
    };
};

//  ================  Action Creators  ================
// export const uploadImgUpdatedActionCreator = (image) => {
//     return {
//         type: UPLOAD_IMG_UPDATED,
//         currentUploadImg: image,
//     };
// };
