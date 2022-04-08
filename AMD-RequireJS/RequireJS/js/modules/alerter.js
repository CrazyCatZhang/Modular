define(['dataServices'], function (dataServices) {
    let msg = 'alerter.js loaded';

    function showMessage() {
        console.log(msg, dataServices.getName());
    }

    return {
        showMessage: showMessage
    };
});