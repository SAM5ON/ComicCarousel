//length to check what letter they are on
//slice();
var textarea = document.getElementById("textarea");
var textarray = document.getElementById("speech").innerHTML;
// var textsplit = textarray.split("");

textarea.addEventListener("input", function replaceText() {
    textarea.value = textarray.slice(0, textarea.value.length);
});
