// appendChild/ removeChild

var ticker = document.getElementById("ticker");
var botticker = document.getElementById("bottomticker");
var text = ticker.getElementsByTagName("a");
var bottext = botticker.getElementsByTagName("a");
var left = ticker.offsetLeft;
var botright = botticker.offsetLeft + botticker.offsetWidth;
var animId;
var animIdBot;

ticker.addEventListener(
    "mouseenter",
    function() {
        text.fontDecoration = "underline";
        cancelAnimationFrame(animId);
    }
    //true --> bubbling
);

ticker.addEventListener("mouseleave", moveBox);

function moveBox() {
    left--;

    if (left <= -text[0].offsetWidth) {
        left = left + text[0].offsetWidth;
        ticker.appendChild(text[0]);
    }

    ticker.style.left = left + "px";

    animId = requestAnimationFrame(moveBox);
}

moveBox();

botticker.addEventListener("mouseenter", function() {
    cancelAnimationFrame(animIdBot);
});

botticker.addEventListener("mouseleave", movebotBox);

function movebotBox() {
    botright--;

    var last = bottext.length - 1;

    if (botright <= -bottext[last].offsetWidth) {
        botright += bottext[last].offsetWidth;
        botticker.insertBefore(bottext[last], bottext[0]);
    }

    botticker.style.right = botright + "px";

    animIdBot = requestAnimationFrame(movebotBox);
}

movebotBox();

//document.body.clientWidth
