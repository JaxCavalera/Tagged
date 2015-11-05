import './heading.css';
import React from 'react';
import taglogo from './images/tagged_logo.png';

export default class HeadElement extends React.Component
{
	render()
	{
		return (
		<header>
			<div id="head_bar">
				<div id="logo_panel">
					<img src={taglogo} alt="Tagged Logo"/>
				</div>
				<div id="login_panel">
					<p>Image Gallery Login</p>
					<input type="text" name="username" placeholder="Username"></input>
					<input type="password" name="password" placeholder="Password"></input>
				</div>
			</div>
		</header>
		);
	}
}
