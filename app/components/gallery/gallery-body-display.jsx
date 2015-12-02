import React, {Component, PropTypes} from 'react';
import './gallery-body.css';

import GalleryImageView from '../../views/gallery/gallery-image-view.jsx';

export default class GalleryBodyDisplay extends Component {
    render() {
        return (
            <div className='galleryBodyDisplay'>
                <GalleryImageView />
                <GalleryImageView />
                <GalleryImageView />
                <GalleryImageView />
                <GalleryImageView />
                <GalleryImageView />
                <GalleryImageView />
                <GalleryImageView />
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryBodyDisplay.propTypes = {

};
