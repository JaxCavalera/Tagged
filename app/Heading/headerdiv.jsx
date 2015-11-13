import React from 'react';
import $ from 'jquery';
import ip from 'ip';

const LOCAL_IP = ip.address();

import taglogo from './images/taggedLogo.png';
import './heading.css';

export default class HeaderDiv extends React.Component
{
//    Functions and code for making dom elements inside render do stuff goes here

    getInitialState()
    {
        return
        {
            username: ''
            password: ''
        };
    }

    regBtn(e)
    {
        console.log(e);
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
                        <input className="logFormInput" type="text" id="username" placeholder="Username"/>
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
