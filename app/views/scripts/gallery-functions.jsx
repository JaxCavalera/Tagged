import {store, history} from '../../index.jsx';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import GalleryImageView from '../gallery/gallery-image-view.jsx';

import {getGalleryImageListActionCreator, galleryUpdateImgViewActionCreator} from '../../actions/gallery-actions.jsx';

//        let gallerySrcPath = this.props.instancedGallerySrcPath;
//        let imageName = this.props.instancedimageName;

//  Get the updated image list object and generate instances of the
//  Image View component using pairs of values from the array

export const launchGetGalleryImageListDispatch = () => {
    console.log('test');

    const generateGalleryImageViewInstances = () => {
        if (store.getState().gallery.galleryImgList.length === 0) {
            return console.log('No Images in The Current User Gallery');
        } else {
            let imgList = store.getState().gallery.galleryImgList;
            let galleryImageViewInstancesValue = '';

            for (let i = 0; imgList.length > i; i++) {
                let instancedGallerySrcPath = imgList[i].img_src;
                let instancedimageName = imgList[i].img_name;

                galleryImageViewInstancesValue += ReactDOMServer.renderToStaticMarkup(
                    <GalleryImageView
                        store={store}
                        instancedGallerySrcPath={instancedGallerySrcPath}
                        instancedimageName={instancedimageName}
                    />
                );
                console.log('%O', galleryImageViewInstancesValue);
            }

            //  displatch the action creator to update the store with the list of image components
            store.dispatch(galleryUpdateImgViewActionCreator(galleryImageViewInstancesValue));
        }
    };

    //  Once the image list is updated run the callback function defined above
    store.dispatch(getGalleryImageListActionCreator(generateGalleryImageViewInstances));
};
