import React, {Component, PropTypes} from 'react';

import taglogo from './images/taggedLogo.png';
import './heading.css';

export default class HeadingDisplay extends Component {
    render() {
        return (
            <div className='headBar'>
                <div className='logoPanel'>
                    <img className='tagLogo' src={taglogo} alt='Tagged Logo'/>
                </div>
                <div className='loginPanel'>
                    <form className='authForm'>
                        <span className='formTitle'>My Account</span>
                        <input className='logFormInput' maxLength='20' type='text' onChange={this.props.unameInput} value={this.props.unameValue}/>
                        <input className='logFormInput' maxLength='20' type='password' onChange={this.props.pwordInput} value={this.props.pwordValue} />
                        <div className='formBtns'>
                            <button className='logFormInput' type='button' onClick={this.props.regBtnClick}>Register</button>
                            <button className='logFormInput' type='button' >Login</button>
                        </div>
                        <p className='inputError'>{this.props.errorTxt}</p>
                    </form>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
HeadingDisplay.propTypes = {
    regBtnClick: PropTypes.func.isRequired,
    unameInput: PropTypes.func.isRequired,
    errorTxt: PropTypes.string.isRequired,
    unameValue: PropTypes.string.isRequired,
    pwordValue: PropTypes.string.isRequired,
};
