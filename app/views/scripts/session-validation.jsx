import {store, history} from '../../index.jsx';
import {sessionStatusActionCreator} from '../../actions/auth-actions.jsx';

export function secureAccessCheck(nextState, replaceState, cb) {
    console.log('checking local store for active session');

    if (store.getState().heading.sessionStatus === 'active') {
        return cb();
    }
    /*
    If sessionValue !== 'active', then dispatch an ActionCreator
    All dispatched ActionCreators have access to getState()
    and dispatch(); because "store" was modified to include Thunk
    */
    console.log('hitting up the database');
    store.dispatch(sessionStatusActionCreator())
    .then(() => {
        console.log('re-checking the store afterdb scan');
        if (store.getState().heading.sessionStatus === 'active') {
            return cb();
        }

        //  If the database has no record, redirect back to login screen
        console.log('No session found sending back to "/"');
        replaceState(nextState.location.pathname, '/');
        return cb();
    });
}

//  When a user arrives at the '/' check if a previous session
//  exists for them and if none exists, continue to '/'
export function existingSessionCheck(nextState, replaceState, cb) {
    if (store.getState().heading.sessionStatus !== 'active') {
        return cb();
    }

    store.dispatch(sessionStatusActionCreator())
    .then(() => {
        if (store.getState().heading.sessionStatus !== 'active') {
            return cb();
        } else {
            //  If the database has no record, redirect back to login screen
            console.log('changing nextState value');
            replaceState(nextState.location.pathname, '/secure');
            return cb();
        }
    });
}

/*
    let sessionCheck = () => {
        if (sessionValue !== 'active') {
            return cb();
        }

        store.dispatch(sessionStatusActionCreator());
    };
    sessionCheck();
    console.log('session check completed with a session value of : ', sessionValue);

    if (sessionValue !== 'active') {
        return cb();
    } else {
        //  If the database has no record, redirect back to login screen
        console.log('changing nextState value');
        replaceState(nextState.location.pathname, '/secure');
        return cb();
    }
}
*/

/*    //  Check if the user is already in an active session
    if (sessionValue === 'active') {
        return cb();
    } else {

        //  If no active session was found, check the database for it
        store.dispatch(sessionStatusActionCreator())
        .then((data) => {
            console.log('Session in DB : ', sessionValue);
            if (sessionValue === 'active') {
                return cb();
            } else {
                //  If the database has no record, redirect back to login screen
                console.log('changing nextState value');
                replaceState(nextState.location.pathname, '/');
                return cb();

                //  we need to call cb(); once the target path is changed
                //  to let the function complete and resume browsing for the user.
            }
        });
    }
}
*/
