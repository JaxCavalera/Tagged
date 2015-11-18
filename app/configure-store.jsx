import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// root reducer, combines all reducers
import reducer from './root-reducer.jsx';

// thunk middleware allows you to write action creators that return
// a function instead of an action (object)
// https://github.com/gaearon/redux-thunk
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

//  =============  could also be written as ==============
//  const thunkWare = applyMiddleware(thunk);
//  const createStoreWithMiddleware = thunkWare(createStore);
//
//  var addTwo = add(2);
//
//  addTwo(4) === 6; // true
//  add(3)(4) === 7; // true
//  runs the function 2 times using different params and combines the result

// create store with middleware, applying combined reducers
export default function configureStore(initialState)
{
    const store = createStoreWithMiddleware(reducer, initialState);

    //  Enable Webpack hot module replacement for reducers
    if (module.hot)
    {
        module.hot.accept(reducer, () => {
            const nextReducer = reducer;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
