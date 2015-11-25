import React, {Component} from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route} from 'react-router';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  =====  Smart View Components  =====
import HeadingView from './views/heading-view.jsx';
import HeadingViewAuth from './views/heading-view-auth.jsx';
import HomeView from './views/home-view.jsx';
import GalleryView from './views/gallery-view.jsx';
import EditorView from './views/editor-view.jsx';

//  "state" is being passed in from the top level <Provider> wrapper
function mapStateToProps(state) {
    return {
        heading: state.heading,
    };
}

class Routes extends Component {
    render() {
        //  =====  Logic Processing  =====

        //  Define loginCheck Function
        const loginCheck = () => {
            const loginStatus = this.props.heading.status;
            if (loginStatus === '' || loginStatus === 'fail') {
                //  User is not logged in or login attempt failed
                return false;
            } else {
                //  User successfully logged in
                return true;
            };
        };

        //  =====  Routes are Defined Here  =====
        return (
            <Router history={createBrowserHistory()}>

                {/*  =====  Ternary Operator TRUE = left side of the ":"  =====  */}
                <Route path='/' component={loginCheck() ? (HeadingViewAuth) : (HeadingView) }>

                    <Route path='/' component={HomeView}></Route>
                    <Route path='gallery' component={GalleryView}></Route>
                    <Route path='editor' component={EditorView}></Route>

                </Route>
            </Router>
        );
    }
}

export default connect(mapStateToProps)(Routes);
