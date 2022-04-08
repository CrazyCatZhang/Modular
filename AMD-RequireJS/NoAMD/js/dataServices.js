(function (window) {
    let name = "dataServices";

    function getName() {
        return name;
    }

    function setName(newName) {
        name = newName;
    }

    window.dataServices = {getName, setName};
})(window);