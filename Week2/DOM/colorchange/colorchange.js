(function autorun() {
    var box = document.getElementById("box");

    box.addEventListener("mousedown", function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        box.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    });

    box.addEventListener("mouseup", function() {
        box.style.backgroundColor = "";
    });
})();
