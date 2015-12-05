//  ip and the Promise modules used for Async Promises
import {history} from '../index.jsx';
import Promise from 'bluebird';
import crypto from 'crypto';
import * as constvars from '../constvars.jsx';
const dbServer = constvars.DBSERVER_VAR;

import {galleryUpdateImgList} from '../views/scripts/gallery-functions.jsx';

export const UPLOAD_IMG_UPDATED = 'UPLOAD_IMG_UPDATED';
export const START_IMG_UPLOAD = 'START_IMG_UPLOAD';
export const SET_GALLERY_IMG_LIST = 'SET_GALLERY_IMG_LIST';

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
            response.text().then((text) => {
                dispatch({
                    type: START_IMG_UPLOAD,
                    uploadStatus: text,
                });
                if (gallery.uploadStatus === 'success') {
                    galleryUpdateImgList();
                }
            });
        });
    };
};

//  =====  GET GALLERY IMAGE LIST ASYNC ACTION CREATOR  =====
export const getGalleryImageListActionCreator = () => {
    return (dispatch, getState) => {
        const {gallery} = getState();

        // //  Cache current state to compare
        // const currentGalleryImgList = gallery.galleryImgList;

        //  Define init (details) for fetch request
        const galleryDownloadInit = {
            method: 'POST',
            credentials: 'include',
        };
        return fetch(dbServer + '/galleryDownload', galleryDownloadInit)
        .then((response) => {
            response.json().then((jsonData) => {
                console.log(jsonData);
                dispatch({
                    type: SET_GALLERY_IMG_LIST,
                    galleryImgList: jsonData,
                });
            });
        });
    };
};

//  ================  Action Creators  ================

//  =====  UPLOAD IMAGE UPDATED ACTION CREATOR  =====
export const uploadImgUpdatedActionCreator = (src, image) => {
    return {
        type: UPLOAD_IMG_UPDATED,
        currentUploadSrc: src,
        currentUploadImg: image,
    };
};
