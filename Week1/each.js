function each(objOrArray, callback) {
    if (Array.isArray(objOrArray)) {
        for (var i = 0; i < objOrArray.length; i++) {
            var idx = i;
            var val = objOrArray[i];
            callback(val, idx);
        }
    } else if (typeof objOrArray === "object") {
        for (var key in objOrArray) {
            var name = key;
            var val = objOrArray[key];
            callback(val, name);
        }
    }
}

each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'
