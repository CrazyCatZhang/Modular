(function (window, dataServices) {
    let msg = 'alerter.js: ';

    function showMessage() {
        console.log(msg, dataServices.getName());
    }

    window.alerter = {
        showMessage: showMessage
    };
})(window, dataServices);