//  jquery and ip modules for AJAX usage only
import $ from 'jquery';
import ip from 'ip';
const LOCAL_IP = ip.address();

//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

import AndroidIcon from '../components/heading/images/androidicon.png';
import MyManifest from '../components/heading/images/manifest.json';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  import dumb components, scripts and actioncreators for this view
import HeadingDisplay from '../components/heading/heading-display.jsx';
import {unameValidation, pwordValidation} from './scripts/auth-validation.jsx';
import {regBtnActionCreator, unameInputActionCreator, pwordInputActionCreator} from '../actions/auth-actions.jsx';

function mapStateToProps(state) {
    return {
        heading: state.heading,
    };
}

class HeadingView extends Component {
    render() {
        let unameErrorTxt = unameValidation(this.props.heading.unameValue);
        let pwordErrorTxt = pwordValidation(this.props.heading.pwordValue);
        let inputErrorSelector = () => (unameErrorTxt.length === 0 ? pwordErrorTxt : unameErrorTxt);
        let inputErrorMsg = inputErrorSelector();

        return (
            <div className='header'>
                <HeadingDisplay
                    regBtnClick={() => {
                        this.props.dispatch(regBtnActionCreator(true));
                    }
                    }
                    unameInput={(e) => {
                        this.props.dispatch(unameInputActionCreator(e.target.value));
                    }
                    }
                    pwordInput={(e) => {
                        this.props.dispatch(pwordInputActionCreator(e.target.value));
                    }
                    }
                    errorTxt={inputErrorMsg}
                    unameValue={this.props.heading.unameValue}
                    pwordValue={this.props.heading.pwordValue}
                />
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

export default connect(mapStateToProps)(HeadingView);
