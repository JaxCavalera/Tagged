import React, {Component, PropTypes} from 'react';

export default class LogoutDisplay extends Component {
    render() {
        return (
            <div className='authPanel'>
                <form className='logoutForm'>
                    <span className='logoutFormTitle'>Welcome, {this.props.welcomeName}</span>
                    <div className='logoutFormBtns'>
                        <button className='logFormInput' type='button' onClick={this.props.logoutBtnClick}>Logout</button>
                    </div>
                </form>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
LogoutDisplay.propTypes = {
    welcomeName: PropTypes.string,
    logoutBtnClick: PropTypes.func.isRequired,
};
