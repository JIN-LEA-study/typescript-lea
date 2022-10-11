interface Shape {
  getArea(): number;
}

/**
 * implements는 Circle이 Shape의 조건에 충족한다.
 */

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);

function getCircleArea(circle: Circle) {
  return circle.getArea();
}

const shapes: Shape[] = [circle, rectangle];
shapes.forEach((shape) => {
  console.log(shape.getArea());
});
