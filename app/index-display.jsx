//	import files used for all pages
import './default.css';

import AndroidIcon from './heading/images/androidicon.png';
import MyManifest from './heading/images/manifest.json';
import React from 'react';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

//	Component import area -- will need to add routing here later
import HeaderDiv from './heading/heading-display.jsx';

//	Generates head tags and places the HeaderDiv inside the container
export default class DocHeadTags extends React.Component
{
    render()
	{
        return (
			<div className="header">
				<HeaderDiv />
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
