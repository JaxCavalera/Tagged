let errorTxt = ['Create New Account or Login', 'Password Is Missing'];

export function unameValidation(text) {
    {
        let usertxt = text;

        //      Validate the Username Field
        if (usertxt.length === 0)
        {
            if (errorTxt.indexOf('Username Is Missing') === -1)
            {
                errorTxt.push('Username Is Missing');
                return errorTxt;
            }
        } else
        {
            //      Check if Error 1 exists and if it does, remove it from the errorTxt array
            let error1pos = errorTxt.indexOf('Username Is Missing');
            if (error1pos !== -1)
            {
                errorTxt.splice(error1pos, 1);
                return errorTxt;
            }
        }

        if (usertxt === 'Username')
        {
            if (errorTxt.indexOf('Change Username') === -1)
            {
                errorTxt.push('Change Username');
                return errorTxt;
            }
        } else
        {
            //      Check if Error 2 exists and if it does, remove it from the errorTxt array
            let error2pos = errorTxt.indexOf('Change Username');
            if (error2pos !== -1)
            {
                errorTxt.splice(error2pos, 1);
                return errorTxt;
            }
        }

        if (/\s+/g.test(usertxt))
        {
            if (errorTxt.indexOf('Username Has Spaces') === -1)
            {
                errorTxt.push('Username Has Spaces');
                return errorTxt;
            }
        } else
        {
            //      Check if Error 3 exists and if it does, remove it from the errorTxt array
            let error3pos = errorTxt.indexOf('Username Has Spaces');
            if (error3pos !== -1)
            {
                errorTxt.splice(error3pos, 1);
                return errorTxt;
            }
        }
    }
};
