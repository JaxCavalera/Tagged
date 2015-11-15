import React from 'react';
import $ from 'jquery';
import ip from 'ip';

const LOCAL_IP = ip.address();

import taglogo from './images/taggedLogo.png';
import './heading.css';

export default class HeaderDiv extends React.Component
{
//    Functions and code for making dom elements inside render do stuff goes here

    constructor()
    {
        super();

//      Cache all binds to avoid repeat function calls
        this.regBtn = this.regBtn.bind(this);
        this.uname = this.uname.bind(this);
        this.pword = this.pword.bind(this);
        this.unameFocus = this.unameFocus.bind(this);
        this.unameBlur = this.unameBlur.bind(this);

//      Set the initial state values for changable DOM elements
        this.state = {
            unameRaw: "Username",
            pwordRaw: "",
            errorTxt: ["Create New Account or Login", "Password Is Missing"]
        }
    }

//  If the username input gets clicked on and = "username" reset to blank
    unameFocus(e)
    {
        if (this.state.unameRaw === "Username")
        {
            this.setState({unameRaw: ""});

            let error1pos = this.state.errorTxt.indexOf("Create New Account or Login");
            if (error1pos !== -1)
            {
                this.state.errorTxt.splice(error1pos, 1);
            }
        }
    }

//  If the username input loses focus confirm contents
    unameBlur(e)
    {
        if (this.state.unameRaw === "")
        {
            if (this.state.errorTxt.indexOf("Username Is Missing") === -1)
            {
                this.state.errorTxt.push("Username Is Missing");
            }
        }
    }

    uname(e)
    {
        this.setState({unameRaw: e.target.value});
        let usertxt = e.target.value;

//      Validate the Username Field
        if (usertxt.length === 0)
        {
            if (this.state.errorTxt.indexOf("Username Is Missing") === -1)
            {
                this.state.errorTxt.push("Username Is Missing");
            }
        }
        else
        {
//      Check if Error 1 exists and if it does, remove it from the errorTxt array
            let error1pos = this.state.errorTxt.indexOf("Username Is Missing");
            if (error1pos !== -1)
            {
                this.state.errorTxt.splice(error1pos, 1);
            }
        }

        if (usertxt === "Username")
        {
            if (this.state.errorTxt.indexOf("Change Username") === -1)
            {
                this.state.errorTxt.push("Change Username");
            }
        }
        else
        {
//      Check if Error 2 exists and if it does, remove it from the errorTxt array
            let error2pos = this.state.errorTxt.indexOf("Change Username");
            if (error2pos !== -1)
            {
                this.state.errorTxt.splice(error2pos, 1);
            }
        }

        if (/\s+/g.test(usertxt))
        {
            if (this.state.errorTxt.indexOf("Username Has Spaces") === -1)
            {
                this.state.errorTxt.push("Username Has Spaces");
            }
        }
        else
        {
//      Check if Error 3 exists and if it does, remove it from the errorTxt array
            let error3pos = this.state.errorTxt.indexOf("Username Has Spaces");
            if (error3pos !== -1)
            {
                this.state.errorTxt.splice(error3pos, 1);
            }
        }
   }

    pword(e)
    {
        this.setState({pwordRaw: e.target.value});
        let usertxt = e.target.value;

//      Validate the Username Field
        if (usertxt.length === 0)
        {
            if (this.state.errorTxt.indexOf("Password Is Missing") === -1)
            {
                this.state.errorTxt.push("Password Is Missing");
            }
        }
        else
        {
//      Check if Error 1 exists and if it does, remove it from the errorTxt array
            let error1pos = this.state.errorTxt.indexOf("Password Is Missing");
            if (error1pos !== -1)
            {
                this.state.errorTxt.splice(error1pos, 1);
            }
        }

        if (/\s+/g.test(usertxt))
        {
            if (this.state.errorTxt.indexOf("Password Has Spaces") === -1)
            {
                this.state.errorTxt.push("Password Has Spaces");
            }
        }
        else
        {
//      Check if Error 3 exists and if it does, remove it from the errorTxt array
            let error3pos = this.state.errorTxt.indexOf("Password Has Spaces");
            if (error3pos !== -1)
            {
                this.state.errorTxt.splice(error3pos, 1);
            }
        }
    }

//  Function for when the Register button is clicked
    regBtn()
    {
        if (this.state.errorTxt.length == 0)
        {
            console.log(this.state.unameRaw);
            console.log(this.state.pwordRaw);
            console.log('SEND via AJAX');
        };
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
                        <input className="logFormInput" maxLength="20" type="text" value={this.state.unameRaw} onChange={this.uname} onFocus={this.unameFocus} onBlur={this.unameBlur}/>
                        <input className="logFormInput" maxLength="20" type="password" value={this.state.pwordRaw} onChange={this.pword}/>
                        <div className="formBtns">
                            <button className="logFormInput" type="button" onClick={this.regBtn}>Register</button>
                            <button className="logFormInput" type="button" >Login</button>
                        </div>
                        <p className="inputError">{this.state.errorTxt[0]}</p>
                    </form>
                </div>
            </div>
        );
    }
}

HeaderDiv.displayName = 'HeaderDiv';
