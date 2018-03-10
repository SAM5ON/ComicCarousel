function newArray(arr) {
    console.log(arr);
    var revarr = arr.slice();
    return revarr.reverse();
}

console.log(newArray([1, 2, 3, 4]));
