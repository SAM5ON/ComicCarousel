function sum() {
    var summ = 0;
    for (var i = 0; i < arguments.length; i++) {
        summ += arguments[i];
    }
    console.log(summ);
}

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330
