//  Redux and React Modules
import {bindActionCreators} from 'redux';
import React, {Component} from 'react';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  =====  Dumb Display Components  =====
import LogoDisplay from '../../components/heading/logo-display.jsx';
import LogoutDisplay from '../../components/heading/logout-display.jsx';
import NavDisplay from '../../components/heading/nav-display.jsx';

//  =====  Scripts and ActionCreators  =====
import {logoutBtnActionCreator} from '../../actions/auth-actions.jsx';

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

class HeadingViewAuth extends Component {

    render() {
        //  =====  Logout Panel Logic  =====
        let activeUsername = this.props.heading.currentUser;

        //  =====  Logout Click Event  =====
        let logoutBtnClick = (() => {
            this.props.dispatch(logoutBtnActionCreator());
        });

        return (
            <div className='headingWrapper'>
                <div className='heading'>
                    <LogoDisplay />
                    <div className='panelSpacer' />
                    <LogoutDisplay
                        welcomeName={activeUsername}
                        logoutBtnClick={logoutBtnClick}
                    />
                </div>
                <NavDisplay />
            </div>
        );
    }
}

export default connect(mapStateToProps)(HeadingViewAuth);
