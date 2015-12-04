//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import Promise from 'bluebird';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  import dumb components, scripts and actioncreators for this view
import GalleryCpDisplay from '../../components/gallery/gallery-cp-display.jsx';
import {unameValidation} from '../scripts/auth-validation.jsx';

import {
    uploadImgUpdatedActionCreator,
} from '../../actions/gallery-actions.jsx';

//  properties declared in here become accessible
//  in code located below inside the render() flux-standard-action
//  The connection between this and the component is done at the bottom
//  using the "connect()" function
//
//  "state" is being passed in from the top level <Provider> wrapper
function mapStateToProps(state) {
    return {
        gallery: state.gallery,
    };
}

class GalleryCpView extends Component {
    render() {
        //  =====  Upload Image Selected Event  =====
        let gallerySelectBtnClick = ((event) => {
            let currentUploadImg = event.target.files[0];
            this.props.dispatch(uploadImgUpdatedActionCreator(currentUploadImg, imgPreviewFuncton));
        });

        //  =============================================

        //  =====  Upload Image Preview =====
        let galleryUploadPreviewImg = this.props.gallery.currentUploadImg;

        let imgPreviewFuncton = () => {
            let fr = new FileReader();

            // let imgFile = this.props.gallery.currentUploadImg;

            fr.onload = imageLoaded;

            function imageLoaded(e) {
                console.log('image loaded is running');
                loadPrevResult = e.target.result;
                console.log(loadPrevResult);
            }
        };

        //  =============================================

        //  =====  Upload Image Go (upload) Event  =====
        let galleryGoBtnClick = (() => {

        });

        return (
            <div className='galleryCpView'>
                <GalleryCpDisplay
                    gallerySelectBtnClick={gallerySelectBtnClick}
                    galleryGoBtnClick={galleryGoBtnClick}
                    galleryUploadPreviewImg={galleryUploadPreviewImg}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GalleryCpView);
