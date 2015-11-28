//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  import dumb components, scripts and actioncreators for this view
import LoginDisplay from '../components/heading/login-display.jsx';

//  =====  Import Scripts and ActionCreators  =====
import {unameValidation, pwordValidation} from './scripts/auth-validation.jsx';
import {
    regBtnActionCreator,
    logBtnActionCreator,
    unameInputActionCreator,
    pwordInputActionCreator,
} from '../actions/auth-actions.jsx';

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

class LoginView extends Component {
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
                    break;
                case (this.props.heading.prevRegAttempt === this.props.heading.unameValue):
                    return 'That Username Is Taken';
                    break;
                case (this.props.heading.logStatus === 'fail'):
                    return 'Invalid Username or Password';
                    break;
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
        let logBtnClick = (() => {
            if (inputErrorMsg.length === 0 || inputErrorMsg === 'That Username Is Taken') {
                this.props.dispatch(logBtnActionCreator());
            }
        });

        return (
            <div className='authStandaloneWrapper'>
                <LoginDisplay
                    regBtnClick={regBtnClick}
                    logBtnClick={logBtnClick}
                    unameInput={unameInput}
                    unameValue={unameValue}
                    pwordInput={pwordInput}
                    pwordValue={pwordValue}
                    errorTxt={inputErrorMsg}
                />
            <p>The page you tried to access is private, please register or login to continue</p>
            </div>
        );
    }
}

export default connect(mapStateToProps)(LoginView);
