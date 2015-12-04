import React, {Component, PropTypes} from 'react';
import './gallery-cp.css';

export default class GalleryCpDisplay extends Component {
    render() {
        return (
            <div className='galleryCpOut'>
                <div className='galleryCpIn'>
                    <div className='galleryDelBtnWrapper'>
                        <button className='galleryDelBtn' type='button' onClick={this.props.galleryDelBtnClick}>Delete Selected Images</button>
                    </div>
                    <div className='panelSpacer' />
                    <div className='galleryUploadWrapper'>
                        <div className='galleryUploadPreview'>
                            {this.props.galleryUploadPreviewImg}
                            <input className='galleryImgNameInput' maxLength='20' type='text' onChange={this.props.galleryImgNameTest} value={this.props.galleryImgNameValue}/>
                            <div className='galleryUploadBtnWrapper'>
                                <label className='galleryUploadSelect'>
                                    Select Image
                                    <input id='galleryUploadSelectHidden' accept='image/*' type='file' onChange={this.props.gallerySelectBtnClick}></input>
                                </label>
                                <button className='galleryUploadGo' type='button' onClick={this.props.galleryGoBtnClick}>Go</button>
                            </div>
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
