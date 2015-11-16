//	import files used for all pages
import './default.css';

import AndroidIcon from './components/heading/images/androidicon.png';
import MyManifest from './components/heading/images/manifest.json';
import React from 'react';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

//	Component import area -- will need to add routing here later
import HeadingDisplay from './components/heading/heading-display.jsx';

//	Generates head tags and places the HeaderDiv inside the container
export default class IndexDisplay extends React.Component
{
    render()
	{
        return (
			<div className="header">
				<HeadingDisplay />
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
