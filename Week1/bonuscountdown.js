function Countdown(sec) {
    this.start = function() {
        setTimeout(function sT1() {
            console.log(sec);
            sec--;
            if (sec >= 0) {
                setTimeout(sT1, 1000);
            }
        }, 1000);
    };
}
var countdown = new Countdown(5);

countdown.start();
