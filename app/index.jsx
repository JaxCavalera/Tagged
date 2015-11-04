import './default.css';
﻿import React from 'react';
import ReactDOM from 'react-dom';

import HeadElement from '../app/heading/head-element.jsx';

main();

function main()
{
//	Declare a new div elemnt to hold the react content
	const container_div = document.createElement('div');
	container_div.setAttribute('id', 'container')
//	Add an instance of the div to the Body element
	document.body.appendChild(container_div);

	//	Insert the HeadArea react class inside contanier_div
	ReactDOM.render(<HeadElement/>, container_div);
}
