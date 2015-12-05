//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  import dumb components, scripts and actioncreators for this view
import GalleryBodyDisplay from '../../components/gallery/gallery-body-display.jsx';
import GalleryImageView from './gallery-image-view.jsx';

//  properties declared in here become accessible
//  in code located below inside the render() flux-standard-action
//  The connection between this and the component is done at the bottom
//  using the "connect()" function
//
//  "state" is being passed in from the top level <Provider> wrapper
function mapStateToProps(state) {
    return {
        gallery: state.gallery,
        heading: state.heading,
    };
}

class GalleryBodyView extends Component {
    render() {
        //  Gallery Logic Code
        //        let gallerySrcPath = this.props.instancedGallerySrcPath;
        //        let imageName = this.props.instancedimageName;

        //  Get the updated image list object and generate instances of the
        //  Image View component using pairs of values from the array
        let galleryImageViewInstances = () => {
            if (this.props.gallery.galleryImgList.length === 0) {
                return '';
            } else {
                let imgList = this.props.gallery.gallerImgList;

                for (i = 0; imgList.length > i; i++) {
                    let instancedGallerySrcPath = imgList[i].img_src;
                    let instancedimageName = imgList[i].img_name;

                    return (
                        galleryImageViewInstances()
                        + <GalleryImageView
                        instancedGallerySrcPath={instancedGallerySrcPath}
                        instancedimageName={instancedimageName}
                        />
                    );
                }
            }
        };

        return (
            <div className='galleryBodyView'>
                <GalleryBodyDisplay
                    galleryImageViewInstances={galleryImageViewInstances}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GalleryBodyView);
