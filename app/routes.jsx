import React, {Component} from 'react';
import {Route} from 'react-router';

//  =====  Smart View Components  =====
import HomeView from './views/home-view.jsx';
import GalleryView from './views/gallery-view.jsx';
import EditorView from './views/editor-view.jsx';
import LoginCheck from './views/scripts/login-check.jsx';

const routes = (

    //  =====  Routes are Defined Here  =====
    <Route component={LoginCheck}>
        <Route path='/' component={HomeView}></Route>
        <Route path='gallery' component={GalleryView}></Route>
        <Route path='editor' component={EditorView}></Route>
    </Route>
);

export default routes;
