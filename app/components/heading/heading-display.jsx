import React from 'react';

import taglogo from './images/taggedLogo.png';
import './heading.css';
import HeadingLogic from './heading-logic.jsx';// WRONG
//  should be importing display into logic not importing logic here
//  logic === Container  AND  display === Presentation

export default class HeadingDispay extends React.Component
{
//    Functions and code for making dom elements inside render do stuff goes here

    constructor(props)
    {
        super(props);
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
                        <input className="logFormInput" maxLength="20" type="text" />
                        <input className="logFormInput" maxLength="20" type="password" />
                        <div className="formBtns">
                            <button className="logFormInput" type="button" onClick={props.regBtnClick}>Register</button>
                            <button className="logFormInput" type="button" >Login</button>
                        </div>
                        <p className="inputError">placeholder error text</p>
                    </form>
                </div>
            </div>
        );
    }
}
