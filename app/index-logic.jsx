//	Libraries
//  Import Statement braces {connect} import a non-default function
//  e.g : "export default <function name>" export default root

﻿import React from 'react';
import ReactDOM from 'react-dom';

//  Import connect function to bind the state tree to the app's state
import {connect} from 'react-redux';

//  Import the store a.k.a the state tree
import createMyStore from './store.js';

//  Component import area -- will probably need to add routing here later
import IndexDisplay from './index-display.jsx';

//  Create the store instance - this file is the top-level "wrapper"
const store = createMyStore();


//	Declare a new div element to hold the react content
function main()
{
	let container_div = document.createElement('div');
	container_div.setAttribute('class', 'container');
	document.body.appendChild(container_div);

	ReactDOM.render(<Provider store={store}><IndexDisplay/></Provider>, container_div);
}

//	Run the main function
main();
