import React, {Component, PropTypes} from 'react';

export default class LogoutPanelDisplay extends Component {
    render() {
        return (
            <div className='authPanel'>
                <form className='authForm'>
                    <span className='formTitle'>Logout Panel Display</span>
                    <button className='logFormInput' type='button' >Logout</button>
                </form>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
LogoutPanelDisplay.propTypes = {

};
