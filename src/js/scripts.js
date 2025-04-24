
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
      this.length = length;
      this.width = width;
      super(color);

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
      const size= math.max(this.length, this.width);
      return new rectangle(size,size);
    }

  }


}
