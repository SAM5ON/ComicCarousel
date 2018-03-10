function insert(arg) {
    var insertion = document.createElement(arg);
    var text = document.createTextNode("AWESOME");
    document.body.appendChild(insertion);
    insertion.appendChild(text);
    insertion.style.zIndex = 2147483647;
    insertion.style.left = "20px";
    insertion.style.top = "100px";
    insertion.style.fontSize = "200px";
    insertion.style.position = "fixed";
}

insert("extra");
