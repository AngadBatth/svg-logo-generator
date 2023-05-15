// Creating a constructor called 'Shape' which is the blueprint for the user input
class Shape {
    constructor(text, color, shape) {
      this.text = text;
      this.color = color;
      this.shape = shape;
      this.width = 300;
      this.height = 200;
    }
  }

// Creating a class called 'Circle' which is derived from the 'Shape' constructor
  class Circle extends Shape {
    constructor(text, color, shape) {
      super(text, color, shape);
    }
    
    render() {
      return `<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${this.height / 2}" fill="${this.shapeColor}"/><text x="${this.width / 2}" y="${this.height / 2 + 20}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }