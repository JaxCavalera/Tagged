//  jquery and ip modules for AJAX usage only
import $ from 'jquery';
import ip from 'ip';
const LOCAL_IP = ip.address();

//  redux components
import {bindActionCreators} from 'redux';

//  connect() gives the component access to the state tree (a.k.a store)
import {connect} from 'react-redux';

//  import dumb components for this view
import HeadingDisplay from '../components/heading/heading-display.jsx';

function mapStateToProps(state)
{
    return {};
}

export default connect(mapStateToProps)(HeadingDisplay);

// declare PropTypes here to lock variables into a specific type
HeadingDisplay.propTypes = {};
