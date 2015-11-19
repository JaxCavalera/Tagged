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

//  Action Creators
const regBtnActionCreator = (text) => {
    return {
        type: REG_BTN_CLICK,
        message: text,
    };
};

export default {
    regBtnActionCreator, REG_BTN_CLICK,
};

// {
//     type: SAMPLE,
//     //optionals
//     error: "the error",
//     payload: "the payload",
//     meta: "some meta information"
// }
//  https://github.com/acdlite/flux-standard-action#actions
