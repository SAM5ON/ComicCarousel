function logType(arg) {
    if (typeof arg === "undefined") {
        console.log("undefined!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (arg === null) {
        console.log("null!");
    } else if (Number.isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === typeof 5) {
        console.log("number!");
    } else if (typeof arg === typeof "aaron") {
        console.log("string!");
    } else if (typeof arg === typeof (10 == 10)) {
        console.log("boolean!");
    } else if (typeof arg === typeof function() {}) {
        console.log("function!");
    } else if (typeof arg === "object" && arg !== null) {
        console.log("object!");
    } else {
        console.log("I have no idea!");
    }
}

logType(undefined);
logType(null);
logType(function() {});
logType(5);
logType(5 * "aaron");
logType("aaron");
logType(10 > 5);
logType([1, 2, 3]);
logType({});

//typeof ALWAYS returns a string//
