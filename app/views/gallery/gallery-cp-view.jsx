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
    startImgUploadActionCreator,
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
            //  essentially file reader does nothing until you give it
            //  instructions to the onload function.
            fr.onload = (e) => {
                let currentUploadSrc = e.target.result;
                this.props.dispatch(uploadImgUpdatedActionCreator(currentUploadSrc, currentUploadImg));
            };

            //  This "reads" a.k.a passes FileReader a file
            fr.readAsDataURL(currentUploadImg);
        });

        //  =============================================

        //  =====  Upload Image Go (upload) Event  =====
        let galleryGoBtnClick = (() => {
            let currentUploadImg = this.props.gallery.currentUploadImg;

            if (currentUploadImg !== 'No Image Selected') {
                //  FormData wraps appended items as though they were directly submitted
                //  from within a form
                let galleryUploadData = new FormData();
                galleryUploadData.append('file', currentUploadImg);
                galleryUploadData.append('imageName', 'Test Image');

                this.props.dispatch(startImgUploadActionCreator(galleryUploadData));
            }
        });

        return (
            <div className='galleryCpView'>
                <GalleryCpDisplay
                    gallerySelectBtnClick={gallerySelectBtnClick}
                    galleryGoBtnClick={galleryGoBtnClick}
                    galleryUploadPreviewImg={this.props.gallery.currentUploadSrc}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GalleryCpView);
