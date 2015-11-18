import {combineReducers} from 'redux';

//  import reducers into the combiner
import AuthReducer from './reducers/auth-reducers.jsx';

// import NavigationReducer from './navigation/reducer';

export default combineReducers({
    heading: AuthReducer.regBtnReducer,

    //    navigationSet: NavigationReducer
});
