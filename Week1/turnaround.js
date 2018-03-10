var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};
for (var x in a) {
    b[a[x]] = x;
}

console.log(b);
