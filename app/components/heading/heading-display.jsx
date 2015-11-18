import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet'; // usage = <Helmet props=""/>

import AndroidIcon from './images/androidicon.png';
import MyManifest from './images/manifest.json';
import taglogo from './images/taggedLogo.png';
import './heading.css';

//  logic === Container (smart)  AND  display === Presentation (dumb)

export default class HeadingDisplay extends Component {
    // constructor() {
    //     super();
    //     let regBtnClick = (e) => {
    //         return console.log();
    //     };
    //
    //     // this.regBtnClick = this.regBtnClick.bind(this);
    // };

    render() {
        //  Destructuring would be the same as const regBtnClick = this.props.regBtnClick
        //  const {regBtnClick} = this.props;

        let regBtnClick = () => {
            this.props.dispatch({
                type: 'REG_BTN_CLICK',
            });
        };

        return (
            <div className='header'>
                <Helmet
                    link={[
                        {rel: 'icon', sizes: '192x192', href: AndroidIcon},
                        {rel: 'manifest', href: MyManifest},
                    ]}
                    meta={[
                        {name: 'mobile-web-app-capable', content: 'yes'},
                    ]}
                />
                <div className='headBar'>
                    <div className='logoPanel'>
                        <img className='tagLogo' src={taglogo} alt='Tagged Logo'/>
                    </div>
                    <div className='loginPanel'>
                        <form className='authForm'>
                            <span className='formTitle'>My Account</span>
                            <input className='logFormInput' maxLength='20' type='text' />
                            <input className='logFormInput' maxLength='20' type='password' />
                            <div className='formBtns'>
                                <button className='logFormInput' type='button' onClick={regBtnClick}>Register</button>
                                <button className='logFormInput' type='button' >Login</button>
                            </div>
                            <p className='inputError'>placeholder error text</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// declare PropTypes here to lock variables into a specific type
HeadingDisplay.propTypes =
{
    regBtnClick: PropTypes.func.isRequired,
};
