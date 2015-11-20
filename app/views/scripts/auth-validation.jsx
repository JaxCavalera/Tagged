export function unameValidation(text) {
    let usertxt = text;
    let errorTxt = [];

    //  Check if unameInput is empty
    if (usertxt.length === 0) {
        errorTxt.push('Username Is Missing');
        return errorTxt;
    }

    if (usertxt === 'Username') {
        errorTxt.push('Create New Account or Login');
        return errorTxt;
    }

    if (/\s+/g.test(usertxt)) {
        errorTxt.push('Username Has Spaces');
        return errorTxt;
    }

    return errorTxt = [];
};

export function pwordValidation(text) {
    let usertxt = text;
    let errorTxt = [];

    //  Check if unameInput is empty
    if (usertxt.length === 0) {
        errorTxt.push('Password Is Missing');
        return errorTxt;
    }

    if (/\s+/g.test(usertxt)) {
        errorTxt.push('Password Has Spaces');
        return errorTxt;
    }

    return errorTxt = [];
};
