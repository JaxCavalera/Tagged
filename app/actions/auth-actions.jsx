//  Async Action Creator
// export const regBtnAsyncActionCreator = (text) => {
//     return ((dispatch) => {
//         setTimeout(function() {
//                dispatch({
//                  type: 'REG_BTN_CLICK',
//                  message: text,
//              });
//            }, 2000);
//         console.log('this is not used normally', text);
//     });
// };
//  Based off https://github.com/happypoulp/redux-tutorial/blob/master/09_dispatch-async-action-2.js#L24
//
export const REG_BTN_CLICK = 'REG_BTN_CLICK';
export const UNAME_INPUT_EVENT = 'UNAME_INPUT_EVENT';
export const PWORD_INPUT_EVENT = 'PWORD_INPUT_EVENT';

//  Action Creators
export const regBtnActionCreator = (boolValue) => {
    return {
        type: REG_BTN_CLICK,
        clicked: boolValue,
    };
};

export const unameInputActionCreator = (text) => {
    return {
        type: UNAME_INPUT_EVENT,
        value: text,
    };
};

export const pwordInputActionCreator = (text) => {
    return {
        type: PWORD_INPUT_EVENT,
        value: text,
    };
};

// {
//     type: SAMPLE,
//     //optionals
//     error: "the error",
//     payload: "the payload",
//     meta: "some meta information"
// }
//  https://github.com/acdlite/flux-standard-action#actions
