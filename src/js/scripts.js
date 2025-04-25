
async function main() {

  class shape {
    constructor(color) {
      this.color = color;
    }

    get area() {
      throw new error(" area has to be implemented");
    }

    get perimeter() {
      throw new error("perimeter has to be implemented");
    }

    contain() {
      throw new error(" contain has to be implemented")
    }
  }

  class rectangle extends shape {
    constructor(length, width, color) {
      super(color);
      this.length = length;
      this.width = width;
      

    }

    get area() {
      return this.width * this.length;
    }

    get perimeter() {
      return 2 * (this.width + this.length);
    }

    get isSquare(){
      return this.width === this.length;
    }

    contain(){
      const size= Math.max(this.length, this.width);
      return size * size;
    }

  }

 class triangle extends shape {
  constructor(base,height,color) {
  super(color);
  this.base = base;
  this.height = height;
  this.equalSides = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.base / 2, 2));
  
  }

  get area(){
    return 0.5 * this.base * this.height;
  }

  get perimeter(){
    return this.base + 2 * this.equalSides;
  }

  contain(){
   const side = Math.max(this.base, this.height);
   return side * side;
  }

}

class circle extends shape{
  constructor(radius, color){
    super(color);
    this.radius = radius;
  }

  get diameter(){
    return 2 * this.radius;
  }

  get perimeter(){
    return this.circumference;
  }

  get area(){
    return 3.14 * this.radius * this.radius;
  }

  contain(){
    const size =  2 * this.radius;
    return size * size;
  }


}

// program list creation

  async function menu(){
    let choice;
    const shapes = [];
    let totalPerimeter = 0;
    let totalArea = 0;
    let totalContainingSquaresArea = 0;

    do {
      choice = parseInt
        output("select a shape:");
        output("1.rectangle");
        output("2.triangle");
        output("3.circle");
        output("0.exit");

        choice = parseInt(await input("choose:"));

      let shape;

      if (choice === 1) {
        output(" creating rectangle..");
        let length = parseFloat(await input("enter length:"));
        let width = parseFloat(await input("enter width:"));
        shape = new rectangle(length,width)
      } else if (choice === 2){
        output("creating triangle..");
        let height = parseFloat(await input("enter length :"));
        let base = parseFloat(await input("enter base length:"));
        shape = new triangle(base, height);
      } else if (choice === 3) {
        output(" creating circle..");
        let radius = parseFloat(await input("enter the radius:"));
        shape = new circle(radius);
      } else if(choice === 0){
        output("exiting.")
        break;
      } else {
        output("invalid selection. try again")
        continue;
      }
      
      if (shape) {
        shapes.push(shape);
        totalPerimeter = totalPerimeter + shape.perimeter;
        totalArea = totalArea + shape.area;
        totalContainingSquaresArea = totalContainingSquaresArea + shape.contain();

        output(`total perimeter: ${totalPerimeter}`);
        output(`total area: ${totalArea}`);
        output(`total area of containing squares: ${totalContainingSquaresArea}`);
        
      }
    } while (choice !== 0); //exit
  
  }

  await menu();
}
main();