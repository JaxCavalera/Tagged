import React from 'react';
import {Route} from 'react-router';

//  =====  Smart View Components  =====
import HeadingView from './views/heading-view.jsx';
import HeadingViewAuth from './views/heading-view-auth.jsx';
import HomeView from './views/home-view.jsx';
import GalleryView from './views/gallery-view.jsx';
import EditorView from './views/editor-view.jsx';

//  Define loginCheck Function
const loginCheck = (dispatch, getState) => {
    const {heading} = getState();// <--- Destructuring
    const loginStatus = heading.status;
    if (loginStatus === '' || loginStatus === 'fail') {
        //  User is not logged in or login attempt failed
        return false;
    } else {
        //  User successfully logged in
        return true;
    };
};

const routes = (

    //  =====  Routes are Defined Here  =====
    <Route component={loginCheck() ? <HeadingViewAuth /> : <HeadingView />} >

        <Route path='/' component={HomeView}></Route>
        <Route path='gallery' component={GalleryView}></Route>
        <Route path='editor' component={EditorView}></Route>

    </Route>
);

export default routes;
