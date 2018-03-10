// // add remove method for classes
// math.abs use for
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
    ///////////////////TOUCHEVENTS////////////////////////////////////////////////////

    var touchbody = document.getElementsByTagName("body");
    touchbody[0].addEventListener("touchstart", handleStart, false);
    touchbody[0].addEventListener("touchend", handleEnd, false);
    var startX;

    function handleStart(e) {
        e.preventDefault();
        console.log("x: " + e.touches[0].pageX + ", y: " + e.touches[0].pageY);
        startX = e.touches[0].pageX;
    }
    function handleEnd(e) {
        e.preventDefault();
        console.log(e);
        console.log(
            "x: " +
                e.changedTouches[0].pageX +
                ", y: " +
                e.changedTouches[0].pageY
        );
        if (!transitioning && startX - e.changedTouches[0].pageX >= 100) {
            clearTimeout(timer);
            movement();
        }
    }

    //////////////////////////////////////////////////////////////////////////////////
    ////////////////////////ARROWKEY NAVIGATION//////////////////////////////////////

    window.addEventListener("keydown", function right(e) {
        console.log(e.keyCode);
        if (!transitioning && e.keyCode == "39") {
            clearTimeout(timer);
            movement();
        }
    });

    timer = setTimeout(movement, 2000);
})();
