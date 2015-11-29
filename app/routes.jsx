import React, {Component} from 'react';
import {Route} from 'react-router';

//  =====  Smart View Components  =====
import AppWrapper from './app-wrapper.jsx';
import HomeView from './views/home-view.jsx';
import GalleryView from './views/gallery-view.jsx';
import EditorView from './views/editor-view.jsx';
import HeadingView from './views/heading-view.jsx';
import HeadingViewAuth from './views/heading-view-auth.jsx';

//  =====  Scripts and Functions  =====
import {secureAccessCheck, existingSessionCheck} from './views/scripts/session-validation.jsx';

/*
path='/secure/editor/:imageId' component={ImageDisplay}
or similar would be used to provide direct url's for each image
using the imageId as URL use this.props.children inside
the desired DIV of EditorView to hook up the route.
*/

const routes = (
    <Route component={AppWrapper}>
        <Route path='/' components={{headingOption: HeadingView, bodyOption: HomeView}} onEnter={existingSessionCheck}></Route>
        <Route path='/secure' components={{headingOption: HeadingViewAuth, bodyOption: HomeView}} onEnter={secureAccessCheck}></Route>
        <Route path='/secure/gallery' components={{headingOption: HeadingViewAuth, bodyOption: GalleryView}}></Route>
        <Route path='/secure/editor' components={{headingOption: HeadingViewAuth, bodyOption: EditorView}}>

        </Route>
    </Route>
);

export default routes;
