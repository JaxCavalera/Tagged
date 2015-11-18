import {combineReducers} from 'redux';

//  import reducers into the combiner
import HeadingReducer from './components/heading/heading-reducer.jsx';

// import NavigationReducer from './navigation/reducer';

export default combineReducers({
    heading: HeadingReducer,

    //    navigationSet: NavigationReducer
});
