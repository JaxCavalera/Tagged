//  ip and the Promise modules used for Async Promises
import {history} from '../index.jsx';
import Promise from 'bluebird';
import crypto from 'crypto';
import * as constvars from '../constvars.jsx';
const dbServer = constvars.DBSERVER_VAR;

export const UPLOAD_IMG_UPDATED = 'UPLOAD_IMG_UPDATED';
export const START_IMG_UPLOAD = 'START_IMG_UPLOAD';

//  =============  Async Action Creators  =============

//  =====  START IMAGE UPLOAD ASYNC ACTION CREATOR  =====
export const startImgUploadActionCreator = (galleryUploadData) => {
    return (dispatch, getState) => {
        const {gallery} = getState();

        //  Define init (details) for fetch request
        const galleryUploadInit = {
            method: 'POST',
            body: galleryUploadData,
            credentials: 'include',
        };
        return fetch(dbServer + '/galleryUpload', galleryUploadInit)
        .then((response) => {
            dispatch({
                type: START_IMG_UPLOAD,
                uploadStatus: response,
            });

            // history.replaceState(null, '/secure');
            // might need a force refresh for image to show up
        });
    };
};

//  ================  Action Creators  ================

//  =====  UPLOAD IMAGE UPDATED ASYNC ACTION CREATOR  =====
export const uploadImgUpdatedActionCreator = (src, image) => {
    return {
        type: UPLOAD_IMG_UPDATED,
        currentUploadSrc: src,
        currentUploadImg: image,
    };
};
