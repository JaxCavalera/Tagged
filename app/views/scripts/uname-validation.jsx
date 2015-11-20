export function unameValidation(text) {
    let usertxt = text;
    let errorTxt = ['Create New Account or Login'];

    //  Check if unameInput is empty
    if (usertxt.length === 0) {
        errorTxt.push('Username Is Missing');
        return errorTxt;
    }

    if (usertxt === 'Username') {
        errorTxt.push('Change Username');
        return errorTxt;
    }

    if (/\s+/g.test(usertxt)) {
        errorTxt.push('Username Has Spaces');
        return errorTxt;
    }

    return errorTxt = [];
};
