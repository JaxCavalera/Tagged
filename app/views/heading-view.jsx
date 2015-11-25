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
import LoginPanelDisplay from '../components/heading/login-panel-display.jsx';

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

class HeadingView extends Component {
    render() {
        //  Auth Validation Logic
        let unameErrorTxt = unameValidation(this.props.heading.unameValue);
        let pwordErrorTxt = pwordValidation(this.props.heading.pwordValue);
        let inputErrorSelector = () => {
            switch (true) {
                case (unameErrorTxt.length !== 0):
                    return unameErrorTxt;
                    break;
                case (pwordErrorTxt.length !== 0):
                    return pwordErrorTxt;
                case (this.props.heading.status === 'fail' && this.props.heading.prevRegAttempt === this.props.heading.unameValue):
                    return 'That Username Is Taken';
                default:
                    return '';
            }
        };

        let inputErrorMsg = inputErrorSelector();

        //  Login Panel Prop Declarations
        let unameValue = this.props.heading.unameValue;
        let pwordValue = this.props.heading.pwordValue;

        let unameInput = ((e) => {
            this.props.dispatch(unameInputActionCreator(e.target.value));
        });

        let pwordInput = ((e) => {
            this.props.dispatch(pwordInputActionCreator(e.target.value));
        });

        let regBtnClick = (() => {
            if (inputErrorMsg.length === 0) {
                this.props.dispatch(regBtnActionCreator());
            }
        });

        // //  Registration Logic
        // let statusResult = this.props.heading.status;
        // function authStatus() {
        //     if (statusResult === 'fail' || statusResult === '') {
        //         return <LoginPanel regBtnClick={regBtnClick} unameInput={unameInput} unameValue={unameValue} pwordInput={pwordInput} pwordValue={pwordValue} errorTxt={inputErrorMsg}/>;
        //     } else {
        //         return 'Logout Panel Here';
        //     }
        // }
        //
        // let AuthStatusValue = authStatus();

        return (
            <div className='header'>
                {/* Props being passed into the Display "dumb" component */}
                <HeadingDisplay authPanelSelect={LoginPanelDisplay} menuSelect={''} />

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

export default connect(mapStateToProps)(HeadingView);
