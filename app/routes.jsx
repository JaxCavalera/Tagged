import React, {Component} from 'react';
import {Route} from 'react-router';

//  =====  Smart View Components  =====
import AppWrapper from './app-wrapper.jsx';
import HomeView from './views/home-view.jsx';
import GalleryView from './views/gallery-view.jsx';
import EditorView from './views/editor-view.jsx';
import HeadingView from './views/heading-view.jsx';
import HeadingViewAuth from './views/heading-view-auth.jsx';

const routes = (
    <Route component={AppWrapper}>
        <Route component={HeadingView}>
            <Route path='/' component={HomeView}></Route>
        </Route>
        <Route path='private' component={HeadingViewAuth}>
            <Route path='private/home'component={HomeView}></Route>
            <Route path='private/gallery' component={GalleryView}></Route>
            <Route path='private/editor' component={EditorView}></Route>
        </Route>
    </Route>
);

export default routes;
