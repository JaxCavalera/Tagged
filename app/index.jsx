//	"const" is a global variable declaration with a frozen value
//	"let" is a local variable declaration
//	if a variable needs to be dynamic use let instead of var
//	This avoids IIFE wrapping but requires an ES6 transformer (babel)

//	import files used for all pages
import './default.css';
import AndroidIcon from 'file!./heading/images/android-icon-192x192.png';
import MyManifest from 'file!./heading/images/manifest.json';

// Libraries
﻿import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

// Component import area -- will need to add routing here later
import HeaderDiv from './heading/headerdiv.jsx';
console.log(MyManifest);

class ContainerDiv extends React.Component
{
	render()
	{
		return (
			<div className="container">
				<HeaderDiv/>
				<Helmet
					link={[
						{"rel": "icon", "sizes": "192x192", "href": AndroidIcon},
						{"rel": "manifest", "href": MyManifest}
					]}
				/>
			</div>
		);
	}
}

ReactDOM.render(<ContainerDiv/>, document.body);

// /*	Declare a new div elemnt to hold the react content*/
// 	const container_div = document.createElement('div');
// 	container_div.setAttribute('id', 'container')
//
// /*	Add an instance of the div to the Body element*/
// 	document.body.appendChild(container_div);
//
// /*	Insert the HeadArea react class inside container_div ** this may end up using React-Router*/
// 	ReactDOM.render(<HeaderDiv/>, container_div);
