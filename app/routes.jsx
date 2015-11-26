import React, {Component} from 'react';
import {Route} from 'react-router';

//  =====  Smart View Components  =====
import AppWrapper from './app-wrapper.jsx';
import HomeView from './views/home-view.jsx';
import GalleryView from './views/gallery-view.jsx';
import EditorView from './views/editor-view.jsx';

const routes = (
    <Route component={AppWrapper}>
        <Route path='/' component={HomeView}></Route>
        <Route path='private/gallery' component={GalleryView}></Route>
        <Route path='private/editor' component={EditorView}></Route>
    </Route>
);

export default routes;
