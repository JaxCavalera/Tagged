export function unameValidation(text) {
    let usertxt = text;
    let errorTxt = '';

    //  Check if unameInput is empty
    if (usertxt.length === 0) {
        errorTxt = 'Username Is Missing';
        return errorTxt;
    }

    if (usertxt === 'Username') {
        errorTxt = 'Create New Account or Login';
        return errorTxt;
    }

    if (/\s+/g.test(usertxt)) {
        errorTxt = 'Username Has Spaces';
        return errorTxt;
    }

    return errorTxt;
};

export function pwordValidation(text) {
    let usertxt = text;
    let errorTxt = '';

    //  Check if unameInput is empty
    if (usertxt.length === 0) {
        errorTxt = 'Password Is Missing';
        return errorTxt;
    }

    if (/\s+/g.test(usertxt)) {
        errorTxt = 'Password Has Spaces';
        return errorTxt;
    }

    return errorTxt;
};
