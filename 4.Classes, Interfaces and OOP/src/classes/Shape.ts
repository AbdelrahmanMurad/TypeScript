abstract class Shape {
    constructor(private _color: string) { }

    get color(): string {
        return this._color;
    }

    // set color(color: string) {
    //     this._color = color;
    // }

    //abstract method
    abstract render(): void;
}

class Circle extends Shape {
    constructor(color: string, private _radius: number) {
        super(color);
    }

    get radius(): number {
        return this._radius;
    }

    override render(): void {
        console.log("Drawing a Circle of " + this.color);
    }
}

class Rectangle extends Shape {
    constructor(color: string, private _width: number, private _height: number) {
        super(color);
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    override render(): void {
        console.log("Drawing a Rectangle of " + this.color);
    }
}

class Triangle extends Shape {
    constructor(color: string, private _height: number, private _base: number) {
        super(color);
    }

    get base(): number {
        return this._base;
    }

    get height(): number {
        return this._height;
    }

    override render(): void {
        console.log("Drawing a Triangle of " + this.color);
    }
}

let circle = new Circle("red", 1);
let rectangle = new Rectangle("yellow", 2, 3);
let triangle = new Triangle("blue", 77, 0.5);

circle.render();
rectangle.render();
triangle.render();