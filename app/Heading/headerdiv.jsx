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

//      Set the initial state values for changable DOM elements
        this.state = {
            unameRaw: "Username",
            pwordRaw: ""
        };

        this.errorTxt = ["Change Username", "Password Is Missing"];
    }

    uname(e)
    {
        this.setState({unameRaw: e.target.value});
        let usertxt = e.target.value;

//      Validate the Username Field
        switch (true) {
            case (usertxt === "") :
                if (this.errorTxt.indexOf("Username Is Missing") === -1)
                {
                    this.errorTxt.push("Username Is Missing");
                };
                break;
            case (usertxt === "Username") :
                if (this.errorTxt.indexOf("Change Username") === -1)
                {
                    this.errorTxt.push("Change Username");
                };
                break;
            case (/\s+/.test(usertxt)) :
                if (this.errorTxt.indexOf("Username Has Spaces") === -1)
                {
                    this.errorTxt.push("Username Has Spaces");
                };
                break;
            default:
//     Check if Error 1 exists and if it does, remove it from the errorTxt array
                let error1pos = this.errorTxt.indexOf("Username Is Missing");
                if (error1pos !== -1)
                {
                    this.errorTxt.splice(error1pos, 1);
                };

//     Check if Error 2 exists and if it does, remove it from the errorTxt array
                let error2pos = this.errorTxt.indexOf("Change Username");
                if (error2pos !== -1)
                {
                    this.errorTxt.splice(error2pos, 1);
                };

//     Check if Error 3 exists and if it does, remove it from the errorTxt array
                let error3pos = this.errorTxt.indexOf("Username Has Spaces");
                if (error3pos !== -1)
                {
                    this.errorTxt.splice(error3pos, 1);
                };

                console.log("Username is Valid");
        };
    }

    pword(e)
    {
        this.setState({pwordRaw: e.target.value});
        let usertxt = e.target.value;

//      Validate the Password Field
        switch (true) {
            case (usertxt === "") :
                if (this.errorTxt.indexOf("Password Is Missing") === -1)
                {
                    this.errorTxt.push("Password Is Missing");
                };
                break;
            case (/\s+/.test(usertxt)) :
                if (this.errorTxt.indexOf("Password Has Spaces") === -1)
                {
                    this.errorTxt.push("Password Has Spaces");
                };
                break;
            default:
//     Check if Error 1 exists and if it does, remove it from the errorTxt array
                let error1pos = this.errorTxt.indexOf("Password Is Missing");
                if (error1pos !== -1)
                {
                    this.errorTxt.splice(error1pos, 1);
                };

//     Check if Error 2 exists and if it does, remove it from the errorTxt array
                let error2pos = this.errorTxt.indexOf("Password Has Spaces");
                if (error2pos !== -1)
                {
                    this.errorTxt.splice(error2pos, 1);
                };

                console.log("Password is Valid");
        };
    }

//  Function for when the Register button is clicked
    regBtn()
    {
        if (this.errorTxt.length == 0)
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
                        <input className="logFormInput" maxLength="20" type="text" value={this.state.unameRaw} onChange={this.uname}/>
                        <input className="logFormInput" maxLength="20" type="password" value={this.state.pwordRaw} onChange={this.pword}/>
                        <div className="formBtns">
                            <button className="logFormInput" type="button" onClick={this.regBtn}>Register</button>
                            <button className="logFormInput" type="button" >Login</button>
                        </div>
                        <p className="inputError">{this.errorTxt[0]}</p>
                    </form>
                </div>
            </div>
        );
    }
}

HeaderDiv.displayName = 'HeaderDiv';
