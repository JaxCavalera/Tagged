import React, {Component, PropTypes} from 'react';

export default class EditorDisplay extends Component {
    render() {
        return (
            <div className='editorBody'>
                <p>Editor Body Area - Secured</p>
            </div>
        );
    }
}

//  declare PropTypes here to lock variables into a specific type
EditorDisplay.propTypes = {

};
