import emailjs from '@emailjs/browser';

export const handleSubmitAndSendEmail = (handleSubmit, inputValues) => {
    const serviceID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const userID = process.env.REACT_APP_EMAIL_JS_USER_ID;
    const templateID = 'template_listen_submit';

    const templateParams = {
        message: inputValues,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
        }, (error) => {
            console.log('Failed to send email:', error);
        });

    if (handleSubmit) {
        handleSubmit();
    }
};