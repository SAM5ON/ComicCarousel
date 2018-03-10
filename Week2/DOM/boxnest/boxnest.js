(function autorun() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    box1.addEventListener("click", function box1col(e) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        e.currentTarget.style.backgroundColor =
            "rgb(" + r + ", " + g + ", " + b + ")";

        box2.addEventListener("click", function(e) {
            var r2 = Math.floor(Math.random() * 256);
            var g2 = Math.floor(Math.random() * 256);
            var b2 = Math.floor(Math.random() * 256);

            e.currentTarget.style.backgroundColor =
                "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";
            e.stopPropagation();
        });
    });
})();
