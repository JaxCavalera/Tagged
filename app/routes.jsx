import React, {Component} from 'react';
import {Route} from 'react-router';
import configureStore from './configure-store.jsx';
import {sessionStatusActionCreator} from './actions/auth-actions.jsx';

//  =====  Smart View Components  =====
import AppWrapper from './app-wrapper.jsx';
import HomeView from './views/home-view.jsx';
import GalleryView from './views/gallery-view.jsx';
import EditorView from './views/editor-view.jsx';
import HeadingView from './views/heading-view.jsx';
import HeadingViewAuth from './views/heading-view-auth.jsx';
import LoginView from './views/login-view.jsx';

function confirmAuth(nextState, replaceState, cb) {
    let store = configureStore();
    store.dispatch(sessionStatusActionCreator())
    .then(() => {
        if (store.getState().heading.sessionStatus === 'active') {
            return cb();
        }
    });
}

const routes = (
    <Route component={AppWrapper}>
        <Route path='/' components={{headingOption: HeadingView, bodyOption: HomeView}}></Route>
        <Route path='/login' component={LoginView}></Route>
        <Route path='/secure' components={{headingOption: HeadingViewAuth, bodyOption: HomeView}} onEnter={confirmAuth}></Route>
        <Route path='/secure/gallery' components={{headingOption: HeadingViewAuth, bodyOption: GalleryView}}></Route>
        <Route path='/secure/editor' components={{headingOption: HeadingViewAuth, bodyOption: EditorView}}>
            {/*path='/secure/editor/:imageId' component={ImageDisplay}*/}
            {/*or similar would be used to provide direct url's for each image*/}
            {/*using the imageId as URL use this.props.children inside*/}
            {/*the desired DIV of EditorView to hook up the route.*/}
        </Route>
    </Route>
);

export default routes;
