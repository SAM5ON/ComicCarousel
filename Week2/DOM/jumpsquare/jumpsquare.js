(function motherfn() {
    var box = document.getElementById("box");
    var half = box.offsetWidth / 2;
    document.addEventListener("mousemove", function(e) {
        box.style.left = e.x - half + "px";
        box.style.top = e.y - half + "px";
    });
})();
