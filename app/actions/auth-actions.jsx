//  Async Action Creator
// let regBtnActionCreator = (text) => {
//     return ((dispatch) => {
//         dispatch({
//             type: 'REG_BTN_CLICK',
//             message: text,
//         });
//         console.log('this is not used normally', text);
//     });
// };
export const REG_BTN_CLICK = 'REG_BTN_CLICK';
export const UNAME_INPUT_EVENT = 'UNAME_INPUT_EVENT';

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

// {
//     type: SAMPLE,
//     //optionals
//     error: "the error",
//     payload: "the payload",
//     meta: "some meta information"
// }
//  https://github.com/acdlite/flux-standard-action#actions
