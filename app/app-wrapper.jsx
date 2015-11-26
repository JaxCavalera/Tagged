import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

//  =====  Import Helmet Assets (images data etc)  =====
import AndroidIcon from './components/heading/images/androidicon.png';
import MyManifest from './components/heading/images/manifest.json';

export default class AppWrapper extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div className='appWrapper'>
                {this.props.children}
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

//  declare PropTypes here to lock variables into a specific type
AppWrapper.propTypes = {

};
