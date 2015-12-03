import {combineReducers} from 'redux';

//  import reducers into the combiner
import {authReducers} from './reducers/auth-reducers.jsx';
import {galleryReducers} from './reducers/gallery-reducers.jsx';

export default combineReducers({
    heading: authReducers,
    gallery: galleryReducers,
});
