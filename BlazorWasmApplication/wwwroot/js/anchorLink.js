
window.anchorLink = {
    scrollIntoView: function (elementId) {
        var elem = document.getElementById(elementId);
        if (elem) {
            elem.scrollIntoView();
            window.location.hash = elementId;
        }
    }
}