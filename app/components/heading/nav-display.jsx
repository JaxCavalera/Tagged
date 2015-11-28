import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class NavDisplay extends Component {
    render() {
        return (
            <div className='navPanel'>
                <ul>
                    <li><Link to='/secure'>Home</Link></li>
                    <li><Link to='/secure/gallery'>Gallery</Link></li>
                    <li><Link to='/secure/editor'>Editor</Link></li>
                </ul>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
NavDisplay.propTypes = {

};
