import React, {Component} from 'react';

import HeadingView from './views/heading-view.jsx';
import HomeView from './views/home-view.jsx';

//  will be replaced with Routing eventually
export default class Router extends Component {
    render() {
        return (
            <div className='routingDiv'>
                <HeadingView />
                <HomeView />
            </div>
        );
    }
}
