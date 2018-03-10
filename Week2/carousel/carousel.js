// // add remove method for classes
//
var pics = document.getElementsByClassName("pictures");
var max = pics.length;
var dots = document.getElementsByClassName("dot");
var timer;
var transitioning;

(function moving() {
    function movement(index) {
        transitioning = true;
        pics[current].classList.remove("onscreen");
        pics[current].classList.add("exit");
        dots[current].classList.add("fill");
        dots[current].classList.remove("fill");

        document.addEventListener("transitionend", function(e) {
            if (e.target.classList.contains("exit")) {
                e.target.classList.remove("exit");
                timer = setTimeout(movement, 5000);
                transitioning = false;
            }
        });
        if (!isNaN(index)) {
            current = index;
        } else {
            current++;
            if (current >= max) {
                current = 0;
            }
        }
        pics[current].classList.add("onscreen");
        dots[current].classList.add("fill");
    }
    var current = 0;
    [].slice.call(dots).forEach(function(dot, index) {
        dot.addEventListener("click", function(e) {
            if (e.target.classList.contains("fill")) {
                return;
            }
            if (!transitioning) {
                console.log(index);
                clearTimeout(timer);
                movement(index);
            }
        });
    });
    timer = setTimeout(movement, 2000);
})();
