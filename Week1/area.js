function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
}

function Square(widthheight) {
    Rectangle.apply(this, [widthheight, widthheight]);
}

var square = new Square(4);
square.getArea(); //16
console.log(square.getArea());

var rect = new Rectangle(4, 5);
rect.getArea(); //20
console.log(rect.getArea());
