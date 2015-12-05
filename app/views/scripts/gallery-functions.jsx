import {store, history} from '../../index.jsx';
import {getGalleryImageListActionCreator} from '../../actions/gallery-actions.jsx';
import Promise from 'bluebird';

//  =====  Gallery Update Displayed Thumbnails  =====
//  USED IN : This File & gallery-actions.jsx
//
//  this function is called when the gallery loads or
//  when a new image is uploaded
//  =================================================
export const galleryUpdateImgList = (cb) => {

    store.dispatch(getGalleryImageListActionCreator());
    return cb();
};

//  =================================================
//         =====  Gallery Path onEnter  =====
//  =================================================
export function loadGalleryImages(nextState, replaceState, cb) {
    return galleryUpdateImgList(cb);
}
