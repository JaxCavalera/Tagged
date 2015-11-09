import React from 'react';

import taglogo from './images/taggedLogo.png';
import './heading.css';

export default class HeaderDiv extends React.Component
{
	render()
	{
		return (
			<div className="headBar">
				<div className="logoPanel">
					<img className="tagLogo" src={taglogo} alt="Tagged Logo"/>
				</div>
				<div className="loginPanel">
					<form className="authForm">
						<span className="formTitle">My Account</span>
						<input className="logFormInput" type="text" name="username" placeholder="Username"/>
						<input className="logFormInput" type="password" name="password" placeholder="Password"/>
						<div className="formBtns">
							<button className="logFormInput" name="register">Register</button>
							<button className="logFormInput" name="login">Login</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
