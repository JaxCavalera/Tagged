import React, {Component, PropTypes} from 'react';
import './auth-panel.css';

import taglogo from './images/taggedLogo.png';

export default class LogoDisplay extends Component {
    render() {
        return (
            <div className='logoPanel'>
                <img className='tagLogo' src={taglogo} alt='Tagged Logo'/>
            </div>
        );
    }
}
