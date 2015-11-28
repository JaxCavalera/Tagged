import {combineReducers} from 'redux';

//  import reducers into the combiner
import {authReducers} from './reducers/auth-reducers.jsx';
import {routeReducer} from 'redux-simple-router';

export default combineReducers({
    heading: authReducers,
    routing: routeReducer,
});
