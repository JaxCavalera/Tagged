//   Libraries
//  Import Statement braces {connect} import a non-default function
//  e.g : "export default <function name>" export default root
import React from 'react';
import ReactDOM from 'react-dom';

//  Import connect function to bind the state tree to the app's state
import {Provider} from 'react-redux';

//  Import the store a.k.a the state tree
import configureStore from './configure-store.jsx';

//  Component import area -- will probably need to add routing here later
import MainLogic from './main-logic.jsx';

//  Create the store instance - this file is the top-level "wrapper"
const store = configureStore();

//	Declare a new div element to hold the react content
function main()
{
    let containerDiv = document.createElement('div');
    containerDiv.setAttribute('CLASS', 'container');
    document.body.appendChild(containerDiv);

    ReactDOM.render(<Provider store={store}><MainLogic /></Provider>, containerDiv);
}

//	Run the main function
main();
