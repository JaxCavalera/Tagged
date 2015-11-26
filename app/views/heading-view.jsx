//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  =====  Import Dumb Display Components  =====
import LogoDisplay from '../components/heading/logo-display.jsx';
import LoginDisplay from '../components/heading/login-display.jsx';

//  =====  Import Scripts and ActionCreators  =====
import {unameValidation, pwordValidation} from './scripts/auth-validation.jsx';
import {regBtnActionCreator, unameInputActionCreator, pwordInputActionCreator} from '../actions/auth-actions.jsx';

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

class HeadingView extends Component {
    render() {
        //  =====  Auth Validation Logic  =====
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

        //  =====  Login Panel Prop Declarations  =====
        //  ===========================================

        //  =====  Current Error Message  =====
        let inputErrorMsg = inputErrorSelector();

        //  =====  Input Field Values  =====
        let unameValue = this.props.heading.unameValue;
        let pwordValue = this.props.heading.pwordValue;

        //  =====  Username Input Events  =====
        let unameInput = ((e) => {
            this.props.dispatch(unameInputActionCreator(e.target.value));
        });

        //  =====  Password Input Events  =====
        let pwordInput = ((e) => {
            this.props.dispatch(pwordInputActionCreator(e.target.value));
        });

        //  =====  Registration Click Event  =====
        let regBtnClick = (() => {
            if (inputErrorMsg.length === 0) {
                this.props.dispatch(regBtnActionCreator());
            }
        });

        //  =====  Login Click Event  =====

        return (
            <div className='headBar'>
                <LogoDisplay />
                <LoginDisplay
                    regBtnClick={regBtnClick}
                    unameInput={unameInput}
                    unameValue={unameValue}
                    pwordInput={pwordInput}
                    pwordValue={pwordValue}
                    errorTxt={inputErrorMsg}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(HeadingView);
