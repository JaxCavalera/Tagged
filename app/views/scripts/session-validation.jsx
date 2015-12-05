import {store} from '../../index.jsx';
import {sessionStatusActionCreator} from '../../actions/auth-actions.jsx';
import launchGetGalleryImageListDispatch from './gallery-functions.jsx';

//  =====  This function will continue to '/secure' if a session is found =====
export function secureAccessCheck(nextState, replaceState, cb) {
    console.log('secureAccessCheck Started');

    //  =====  This is the callback function. It runs if nothing matches  =====
    function dbCheckDone() {
        //  Check if the target path is the image gallery
        //  if it is, then launch the image updater functions
        let theCurrentPath = nextState.location.pathname;

        if (theCurrentPath === '/secure/gallery') {
            launchGetGalleryImageListDispatch();
        }

        if (store.getState().heading.sessionStatus === 'active') {
            return cb();
        }

        replaceState(nextState.location.pathname, '/');
        return cb();
    }

    //  ==========  END  OF  CALLBACK  FUNCTION  ==========

    //  First check the current state for an active session
    if (store.getState().heading.sessionStatus === 'active') {
        return cb();
    }

    //  No state found, try the database for a record of one
    console.log('Checking database for active session');
    store.dispatch(sessionStatusActionCreator(dbCheckDone));
}

//  =====  This function will continue to '/' if NO session is found =====
export function sessionCheck(nextState, replaceState, cb) {
    console.log('sessionCheck Started');

    //  Check state make sure no Session Exists
    if (store.getState().heading.sessionStatus !== 'active') {

        //  No session found in the store.. check the Database for one instead
        store.dispatch(sessionStatusActionCreator(dbCheckDone));
    }

    //  =====  This is the callback function used inside the store.dispatch above  =====
    //  =====  It runs if no session was found in the currentState  =====
    function dbCheckDone() {
        if (store.getState().heading.sessionStatus !== 'active') {
            console.log('no session found on the database');
            return cb();
        } else {
            //  Session was found
            replaceState(nextState.location.pathname, '/secure');
            return cb();
        }
    }
}
