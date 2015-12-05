import React, {Component, PropTypes} from 'react';
import './gallery-image.css';
import * as constvars from '../../constvars.jsx';
const dbServer = constvars.DBSERVER_VAR;

//  '/galleries/1449284503923_allstyle_imagemap.jpg'

export default class GalleryImageDisplay extends Component {
    render() {
        return (
            <div className='galleryImageDisplay'>
                <div className='galleryImageFrame'>
                    <img src={dbServer + this.props.gallerySrcPath} />
                </div>
                <div className='galleryImageInfo'>
                    <label className='galleryImageCheckbox'>
                        <input type='checkbox' />
                        <span><span></span></span>
                    </label>
                    <span className='galleryImageName'>
                        {this.props.imageName}
                    </span>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryImageDisplay.propTypes = {

};
