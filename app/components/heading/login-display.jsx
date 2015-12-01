import React, {Component, PropTypes} from 'react';
import './auth-panel.css';

export default class LoginDisplay extends Component {
    render() {
        return (
            <div className='authPanel'>
                <form className='loginForm'>
                    <span className='loginFormTitle'>My Account</span>
                    <input className='logFormInput' maxLength='20' type='text' onChange={this.props.unameInput} value={this.props.unameValue}/>
                    <input className='logFormInput' maxLength='20' type='password' onChange={this.props.pwordInput} value={this.props.pwordValue} />
                    <div className='loginFormBtns'>
                        <button className='logFormInput' type='button' onClick={this.props.regBtnClick}>Register</button>
                        <button className='logFormInput' type='button' onClick={this.props.loginBtnClick}>Login</button>
                    </div>
                    <p className='inputError'>{this.props.errorTxt}</p>
                </form>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
LoginDisplay.propTypes = {
    regBtnClick: PropTypes.func.isRequired,
    loginBtnClick: PropTypes.func.isRequired,
    unameInput: PropTypes.func.isRequired,
    errorTxt: PropTypes.string.isRequired,
    unameValue: PropTypes.string.isRequired,
    pwordValue: PropTypes.string.isRequired,
};
