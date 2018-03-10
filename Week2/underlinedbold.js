function elem(selectorString) {
    var selector = document.querySelectorAll(selectorString);
    for (var i = 0; i < selector.length; i++) {
        selector[i].style.fontStyle = "italic";
        selector[i].style.fontWeight = "bold";
        selector[i].style.textDecoration = "underline";
    }
}
elem("p");
