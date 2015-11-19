import {combineReducers} from 'redux';

//  import reducers into the combiner
import AuthReducer, {regBtnReducer} from './reducers/auth-reducers.jsx';

// import NavigationReducer from './navigation/reducer';

export default combineReducers({
    heading: regBtnReducer,

    //    navigationSet: NavigationReducer
});
