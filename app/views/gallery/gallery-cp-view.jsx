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
            //  This first line gets the file from the input element

            let currentUploadImg = event.target.files[0];

            let fr = new FileReader();

            //  This defines what the FileReader object will do when you "read"
            //  a.k.a pass it a "File"
            fr.onload = (e) => {
                let galleryImgSrc = e.target.result;
                this.props.dispatch(uploadImgUpdatedActionCreator(galleryImgSrc));
            };

            //  This "reads" a.k.a passes FileReader a file
            fr.readAsDataURL(currentUploadImg);
        });

        //  =============================================

        //  =====  Upload Image Go (upload) Event  =====
        let galleryGoBtnClick = (() => {

        });

        return (
            <div className='galleryCpView'>
                <GalleryCpDisplay
                    gallerySelectBtnClick={gallerySelectBtnClick}
                    galleryGoBtnClick={galleryGoBtnClick}
                    galleryUploadPreviewImg={this.props.gallery.currentUploadImg}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GalleryCpView);
