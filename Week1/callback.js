function waitThenRun(fn) {
    setTimeout(fn, 1500);
}

waitThenRun(function() {
    console.log("Hello!");
}); // logs 'Hello!' 1.5 seconds later

waitThenRun(function() {
    console.log("Goodbye!");
}); // logs 'Goodbye!' 1.5 seconds later
