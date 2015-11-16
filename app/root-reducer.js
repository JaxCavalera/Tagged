import {combineReducers} from 'redux';

//  import reducers into the combiner
import HeadingReducer from './components/heading/heading-reducer.js';
// import NavigationReducer from './navigation/reducer';

export default combineReducers({
    updateHeadingDiv: HeadingReducer
//    navigationSet: NavigationReducer
});
