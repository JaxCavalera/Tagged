import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// root reducer, combines all reducers
import reducer from './root-reducer.js';


// thunk middleware allows you to write action creators that return
// a function instead of an action (object)
// https://github.com/gaearon/redux-thunk

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

//  =============  could also be written as ==============
//  const thunkWare = applyMiddleware(thunkMiddleware);
//  const createStoreWithMiddleware = thunkWare(createStore);
//
//  var addTwo = add(2);
//
//  addTwo(4) === 6; // true
//  add(3)(4) === 7; // true
//  runs the function 2 times using different params and combines the result


// create store with middleware, applying combined reducers
export default function createMyStore(initialState)
{
    return createStoreWithMiddleware(reducer, initialState);
}
