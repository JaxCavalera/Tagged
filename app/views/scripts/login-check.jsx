import React, {Component} from 'react';
import {Route} from 'react-router';
import {connect} from 'react-redux';

import HeadingView from '../heading-view.jsx';
import HeadingViewAuth from '../heading-view-auth.jsx';

class LoginCheck extends Component {
    render() {

        //  =====  Define loginCheck Function  =====
        const loginStatus = heading.status;
        const loginStatusFunction = () => {
            if (loginStatus === '' || loginStatus === 'fail') {

                //  User is not logged in or login attempt failed
                return <HeadingView />;
            } else {

                //  User successfully logged in
                return <HeadingViewAuth />;
            };
        };

        return loginStatusFunction();
    }
}

export default connect((state) => {
    heading: state.heading;
})(LoginCheck);
