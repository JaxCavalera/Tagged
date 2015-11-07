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
					<form className="auth_form">
						<span>My Account</span>
						<input type="text" name="username" placeholder="Username"/>
						<input type="password" name="password" placeholder="Password"/>
						<div id="form_btns">
							<input type="submit" name="register" value="Register"/>
							<input type="submit" name="login" value="Login"/>
						</div>
					</form>
				</div>
			</div>
		</header>
		);
	}
}
