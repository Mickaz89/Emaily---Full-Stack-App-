const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// getting invalid emails
export default (emails) => {
    console.log('VALIDATE EMAILS');
    const invalidEmails = emails
        .split(',')
        .map( email => email.trim())
        .filter(email => re.test(email) === false);

    if (invalidEmails.length){
        console.log('INVALID EMAILS', invalidEmails);
        return `These emails are invalid: ${invalidEmails}`;
    }
    else{
        return null ;
    }
}