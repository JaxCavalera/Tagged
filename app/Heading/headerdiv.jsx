import React from 'react';
import $ from 'jquery';
import ip from 'ip';

const LOCAL_IP = ip.address();

import taglogo from './images/taggedLogo.png';
import './heading.css';

export default class HeaderDiv extends React.Component
{
//	Functions and code for making dom elements inside render do stuff goes here
//	register button click function
	regBtn(e)
	{
		let uname = $('#username').val();
		switch (true)
		{
//	case = true if uname is empty or contains 1 or more orphan spaces
			case (uname === '' || uname === 'Enter Valid Username' || /^[.?\s+.?]/.test(uname)) :
				$('#username').val('Enter Valid Username');
				$('#username').addClass("inputError");
				break;

			default:$.ajax({
					url: 'LOCAL_IP:8081',
					dataType: 'json',
					type: 'POST',
					data: uname,
					success: function(data)
					{
						console.log(data+'Has been registered');
					}
			});
		}
	}

//	clear inputError class css styling on focus
		unameFocus(e)
		{
			switch (true) {
				case (e.target.className !== "logFormInput") :
					e.target.className = "logFormInput";
					e.target.value = '';
				break;
				default:
				return false;
			}
		}

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
						<input className="logFormInput" type="text" id="username" placeholder="Username" onFocus={this.unameFocus.bind(this)}/>
						<input className="logFormInput" type="password" id="password" placeholder="Password"/>
						<div className="formBtns">
							<button className="logFormInput" type="button" id="register" onClick={this.regBtn.bind(this)}>Register</button>
							<button className="logFormInput" type="button" id="login">Login</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

HeaderDiv.displayName = 'HeaderDiv';
