import React, {Component, PropTypes} from 'react';
import './gallery-image.css';

export default class GalleryImageDisplay extends Component {
    render() {
        return (
            <div className='galleryImageDisplay'>
                <div className='galleryImageFrame'>
                    <img src={this.props.imgSrc} />
                </div>
                <div className='galleryImageInfo'>
                    <input className='galleryImageCheckbox' type='checkbox' />
                    <div className='galleryImageName'>{'this.props.imgName'}</div>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryImageDisplay.propTypes = {

};
