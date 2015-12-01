import React, {Component, PropTypes} from 'react';
import './gallery.css';

import GalleryCpView from '../../views/gallery/gallery-cp-view.jsx';
import GalleryImagesView from '../../views/gallery/gallery-images-view.jsx';

export default class GalleryDisplay extends Component {
    render() {
        return (
            <div className='galleryContainer'>
                <div className='galleryBody'>
                    <GalleryImagesView />
                    <GalleryCpView />
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryDisplay.propTypes = {

};
