function invertCase(string) {
    string = string.split("");
    console.log(string);
    for (var i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            string[i] = string[i].toLowerCase();
        } else {
            string[i] = string[i].toUpperCase();
        }
    }
    return string.join("");
}
console.log(invertCase("heLLo THIS is  ®®´∂ßß A TesT 999293"));
