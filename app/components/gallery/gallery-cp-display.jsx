import React, {Component, PropTypes} from 'react';
import './gallery-cp.css';

export default class GalleryCpDisplay extends Component {
    render() {
        return (
            <div className='galleryCp'>
                <div className='galleryDelBtnWrapper'>
                    <button className='galleryDelBtn' type='button' onClick={this.props.galleryDelBtnClick}>Delete Selected Images</button>
                </div>
                <div className='panelSpacer' />
                <div className='galleryUploadWrapper'>
                    <div className='galleryUploadPreview'>
                        <img src={this.props.galleryUploadPreviewValue} />
                        <input className='galleryImgNameInput' maxLength='20' type='text' onChange={this.props.galleryImgNameTest} value={this.props.galleryImgNameValue}/>
                        <div className='galleryUploadBtnWrapper'>
                            <button className='galleryUploadInput' type='button' onClick={this.props.galleryDelBtnClick}>Select Image</button>
                            <button className='galleryUploadOk' type='button' onClick={this.props.galleryDelBtnClick}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
GalleryCpDisplay.propTypes = {

};
