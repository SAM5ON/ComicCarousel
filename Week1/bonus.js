function getTotaler() {
    var total = 0;
    return function fn(num) {
        return (total += num);
    };
}

var totaler = getTotaler();
console.log(totaler(1)); //1
console.log(totaler(2)); //3
console.log(totaler(5)); //8
