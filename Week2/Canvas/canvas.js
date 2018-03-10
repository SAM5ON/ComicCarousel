var context = document.getElementById("canv").getContext("2d");
var back = document.getElementById("canv2").getContext("2d");
var canv1 = document.getElementById("canv");
var backw = document.getElementById("canv2");

backw.style.width = window.innerWidth;

context.strokeStyle = "#000";
context.beginPath();
context.arc(150, 100, 50, 0, 2 * Math.PI); //head

context.moveTo(150, 150); //body
context.lineTo(150, 300);

context.lineTo(80, 400); // left leg

context.moveTo(150, 300); // right leg
context.lineTo(220, 400);

context.moveTo(150, 225); // left arm
context.lineTo(50, 200);

context.moveTo(150, 225); // left arm
context.lineTo(250, 200);

context.stroke();

///////////////////////////////////////

/////////////////////////////////////
// back.drawImage(context, 0, 0);
var x = 0;
var y = 0;

window.addEventListener("keypress", function left(e) {
    if (e.keyCode == "37") {
        back.clearRect(x, y, 500, 500);
        console.log("left");
        x -= 20;
        back.drawImage(canv1, x, y);
    }
});

window.addEventListener("keypress", function up(e) {
    if (e.keyCode == "38") {
        back.clearRect(x, y, 500, 500);
        console.log(e.keyCode);
        y -= 20;
        back.drawImage(canv1, x, y);
    }
});

window.addEventListener("keypress", function right(e) {
    if (e.keyCode == "39") {
        console.log(e.keyCode);
        back.clearRect(x, y, 500, 500);
        back.drawImage(canv1, x, y);
        x += 20;
    }
});

window.addEventListener("keypress", function down(e) {
    if (e.keyCode == "40") {
        console.log(e.keyCode);
        back.clearRect(x, y, 500, 500);
        y += 20;
        back.drawImage(canv1, x, y);
    }
});
