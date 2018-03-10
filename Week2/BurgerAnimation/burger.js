var burger = document.getElementById("menu-button");
var menuLinks = document.getElementById("menu");
var exit = document.getElementById("exit");
var shadow = document.getElementById("shadow");

var posit = (menuLinks.style.right = "-300px");

burger.addEventListener("click", function open(e) {
    console.log("sesame open");
    menuLinks.style.right = "0px";
    shadow.style.filter = "brightness(0.5)";
    e.stopPropagation();
});

exit.addEventListener("click", function exit() {
    menuLinks.style.right = posit;
    shadow.style.filter = "";
});

document.addEventListener("click", function close() {
    menuLinks.style.right = posit;
    shadow.style.filter = "";
});
