import React, {Component, PropTypes} from 'react';
import './gallery-body.css';

export default class GalleryBodyDisplay extends Component {
    render() {
        return (
            <div className='galleryBodyDisplay'>
                {this.props.galleryImageViewInstances}
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryBodyDisplay.propTypes = {

};
