//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  Import component assets (images data etc)
import AndroidIcon from '../components/heading/images/androidicon.png';
import MyManifest from '../components/heading/images/manifest.json';

//  import dumb components, scripts and actioncreators for this view
import HeadingDisplay from '../components/heading/heading-display.jsx';
import LogoutPanelDisplay from '../components/heading/logout-panel-display.jsx';
import MenuDisplay from '../components/heading/menu-display.jsx';

import {unameValidation, pwordValidation} from './scripts/auth-validation.jsx';
import {regBtnActionCreator, unameInputActionCreator, pwordInputActionCreator} from '../actions/auth-actions.jsx';

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

class HeadingViewAuth extends Component {
    render() {
        //  =====  Logout Panel Logic  =====

        return (
            <div className='header'>
                {/* Props being passed into the Display "dumb" component */}
                <HeadingDisplay authPanelSelect={LogoutPanelDisplay} menuSelect={MenuDisplay} />

                {/* Helmet is used here to define Elements in the <head></head> */}
                <Helmet
                    link={[
                        {rel: 'icon', sizes: '192x192', href: AndroidIcon},
                        {rel: 'manifest', href: MyManifest},
                    ]}
                    meta={[
                        {name: 'mobile-web-app-capable', content: 'yes'},
                    ]}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(HeadingViewAuth);
