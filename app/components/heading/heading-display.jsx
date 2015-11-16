import React, {Component, PropTypes} from 'react';

import taglogo from './images/taggedLogo.png';
import './heading.css';

//  logic === Container (smart)  AND  display === Presentation (dumb)

export default class HeadingDispay extends Component
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
                        <input className="logFormInput" maxLength="20" type="text" />
                        <input className="logFormInput" maxLength="20" type="password" />
                        <div className="formBtns">
                            <button className="logFormInput" type="button" onClick={this.props.regBtnClick}>Register</button>
                            <button className="logFormInput" type="button" >Login</button>
                        </div>
                        <p className="inputError">placeholder error text</p>
                    </form>
                </div>
            </div>
        );
    }
}

// declare PropTypes here to lock variables into a specific type
