function elem(arg) {
    var classarg = document.getElementsByClassName(arg);
    classarg = [].slice.call(classarg);
    return classarg;
}

elem("reichstag");
