//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

//  =====  Import Helmet Assets (images data etc)  =====
import AndroidIcon from './components/heading/images/androidicon.png';
import MyManifest from './components/heading/images/manifest.json';
import './components/default.css';

/*
properties declared in here become accessible
in code located below inside the render() flux-standard-action
The connection between this and the component is done at the bottom
using the "connect()" function
*/

//  =====  "state" is being passed in from the top level <Provider> wrapper  =====
function mapStateToProps(state) {
    return {
        heading: state.heading,
    };
}

class AppWrapper extends Component {
    render() {

        const {headingOption, bodyOption, footerOption} = this.props;

        return (
            <div className='appWrapper'>
                {headingOption}
                {bodyOption}
                {footerOption}

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

export default connect(mapStateToProps)(AppWrapper);
