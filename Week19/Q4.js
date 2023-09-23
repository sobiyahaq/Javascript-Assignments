class Shape{
    constructor(){
    }

    calculateArea(){
    }

    calculatePerimeter(){
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }

    calculateArea(){
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(){
        return 2 * Math.PI * this.radius;
    }
    
}

class Rectangle extends Shape{
    constructor(length,breadth){
        super();
        this.length=length;
        this.breadth = breadth;
    }

    calculateArea(){
        return this.length * this.breadth;
    }

    calculatePerimeter(){
        return 2 *  (this.length + this.breadth);
    }

}

class Triangle extends Shape{
    constructor(side1, side2, side3, height1, height2) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.height1 = height1;
        this.height2 = height2;
      }
    
      calculateArea() {
        return 0.5 * this.side1 * this.side2;
      }
      calculatePerimeter() {
        return this.side3 + this.height1 + this.height2;
      }
    
}


const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);
// Circle - Area: 78.53981633974483, Perimeter: 31.41592653589793
const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`); 
// Rectangle Area: 24, Perimeter: 20
const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`); 
// Triangle - Area: 24, Perimeter: 22
