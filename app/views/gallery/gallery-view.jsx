//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  import dumb components, scripts and actioncreators for this view
import GalleryDisplay from '../../components/gallery/gallery-display.jsx';

//  properties declared in here become accessible
//  in code located below inside the render() flux-standard-action
//  The connection between this and the component is done at the bottom
//  using the "connect()" function
//
//  "state" is being passed in from the top level <Provider> wrapper
function mapStateToProps(state) {
    return {
        heading: state.heading,
    };
}

class GalleryView extends Component {
    render() {
        //  Gallery Logic Code
        return (
            <div className='galleryPanel'>
                <GalleryDisplay />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GalleryView);
