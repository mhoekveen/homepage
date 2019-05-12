function loadBackground() {
    var img = new Image();
    img.src = "img/background.png";
    img.onload = function () {
        document.getElementById("bige").className = "background";
    }
}