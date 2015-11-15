//	Libraries
//  Import Statement braces {connect} import a non-default function
//  e.g : "export default <function name>" export default root

﻿import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

// Component import area -- will probably need to add routing here later
import DocHeadTags from './index-display.jsx';

//	Declare a new div element to hold the react content
function main()
{
	let container_div = document.createElement('div');
	container_div.setAttribute('class', 'container');
	document.body.appendChild(container_div);

	ReactDOM.render(<DocHeadTags/>, container_div);
}

//	Run the main function
main();
