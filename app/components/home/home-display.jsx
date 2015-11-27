import React, {Component, PropTypes} from 'react';
import './home.css';

export default class HomeDisplay extends Component {
    render() {
        return (
            <div className='homeContainer'>
                <div className='homeBody'>
                    <h1>Welcome to Tagged</h1>
                    <p>Start uploading your images and tagging other users today!</p>
                </div>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
HomeDisplay.propTypes = {

};
