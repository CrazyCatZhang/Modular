(function () {
    requirejs.config({
        baseUrl: 'js/modules/',
        paths: {
            dataServices: 'dataServices',
            alerter: 'alerter',
        }
    });
    requirejs(['alerter'], function (alerter) {
        alerter.showMessage();
    });
})();