//  Libraries
//  Import Statement braces {connect} import a non-default function
//  e.g : "export default <function name>" export default root
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {syncReduxAndRouter} from 'redux-simple-router';
import {Router} from 'react-router';

//  Import routing structure (relation between "smart" views and URL's)
import routes from './routes.jsx';

//  Import connect function to bind the state tree to the app's state
import {Provider} from 'react-redux';

//  Import the store a.k.a the state tree
import configureStore from './configure-store.jsx';

//  Create the store alias for <provider>
//  index.jsx is the top-level "wrapper"
export const store = configureStore();
const history = createBrowserHistory();
syncReduxAndRouter(history, store);

//	Declare a new div element to hold the react application
function main()
{
    let containerDiv = document.createElement('div');
    containerDiv.setAttribute('CLASS', 'container');
    document.body.appendChild(containerDiv);

    render(
        <Provider store={store}>
            <Router routes={routes} history={history} />
        </Provider>, containerDiv
    );
}

//	Run the main function
main();
