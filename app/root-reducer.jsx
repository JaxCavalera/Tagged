import {combineReducers} from 'redux';

//  import reducers into the combiner
import {authReducers} from './reducers/auth-reducers.jsx';

// import NavigationReducer from './navigation/reducer';

export default combineReducers({
    heading: authReducers,

    //    navigationSet: NavigationReducer
});
