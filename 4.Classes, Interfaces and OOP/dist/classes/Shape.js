"use strict";
class Shape {
    constructor(_color) {
        this._color = _color;
    }
    get color() {
        return this._color;
    }
}
class Circle extends Shape {
    constructor(color, _radius) {
        super(color);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    render() {
        console.log("Drawing a Circle of " + this.color);
    }
}
class Rectangle extends Shape {
    constructor(color, _width, _height) {
        super(color);
        this._width = _width;
        this._height = _height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    render() {
        console.log("Drawing a Rectangle of " + this.color);
    }
}
class Triangle extends Shape {
    constructor(color, _height, _base) {
        super(color);
        this._height = _height;
        this._base = _base;
    }
    get base() {
        return this._base;
    }
    get height() {
        return this._height;
    }
    render() {
        console.log("Drawing a Triangle of " + this.color);
    }
}
let circle = new Circle("red", 1);
let rectangle = new Rectangle("yellow", 2, 3);
let triangle = new Triangle("blue", 77, 0.5);
circle.render();
rectangle.render();
triangle.render();
//# sourceMappingURL=Shape.js.map