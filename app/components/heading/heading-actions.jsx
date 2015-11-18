//  Action Creators
let regBtnActionCreator = (text) => {
    return {
        type: 'REG_BTN_CLICK',
        message: text,
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
