function detection(num) {
    if (num <= 0 || typeof num != "number") {
        console.log("ERROR");
    } else if (num >= 1000000) {
        console.log(num);
    } else {
        while (num < 1000000) {
            num *= 10;
        }
        console.log(num);
    }
}

detection("");
detection(50);
detection(10000002);
