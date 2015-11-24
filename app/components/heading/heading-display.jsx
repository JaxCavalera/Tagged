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
                {this.props.authPanelSelect}
            </div>
        );
    }
}
