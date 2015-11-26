import React, {Component, PropTypes} from 'react';

export default class GalleryDisplay extends Component {
    render() {
        return (
            <div className='galleryBody'>
                <p>Gallery Body Area - Secured</p>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryDisplay.propTypes = {

};
