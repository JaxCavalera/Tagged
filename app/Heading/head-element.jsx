import React from 'react';
import '../heading/images/tagged_logo.png'

export default class HeadElement extends React.Component
{
	render()
	{
		return (
			<div id="logo">
				<img src="tagged_logo.png" alt="Tagged Logo"/>
			</div>
		);
	}
}
