import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import HeadingDisplay from './components/heading/heading-display.jsx';

function mapStateToProps(state)
{
    return {};
}

export default connect(mapStateToProps)(HeadingDisplay);
