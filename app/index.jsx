//	"const" is a global variable declaration with a frozen value
//	"let" is a local variable declaration
//	if a variable needs to be dynamic use let instead of var
//	This avoids IIFE wrapping but requires an ES6 transformer (babel)

//	import files used for all pages
import './default.css';

import AndroidIcon from './heading/images/androidicon.png';
import MyManifest from 'file?name=[name].[ext]!./heading/images/manifest.json';

//	Libraries
﻿import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

//	Component import area -- will need to add routing here later
import HeaderDiv from './heading/headerdiv.jsx';

//	Generates head tags and places the HeaderDiv inside the container
class DocuHeadTags extends React.Component
{
	render()
	{
		return (
			<div className="header">
				<HeaderDiv/>
				<Helmet
					link={[
						{"rel": "icon", "sizes": "192x192", "href": AndroidIcon},
						{"rel": "manifest", "href": MyManifest}
					]}
					meta={[
						{"name": "mobile-web-app-capable", "content": "yes"}
					]}
				/>
			</div>
		);
	}
}

//	Declare a new div elemnt to hold the react content
function main()
{
	let container_div = document.createElement('div');
	container_div.setAttribute('class', 'container');

	document.body.appendChild(container_div);

	ReactDOM.render(<DocuHeadTags/>, container_div);
}

//	Run the main function
main();
