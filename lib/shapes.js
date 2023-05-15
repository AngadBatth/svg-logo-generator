// Creating a constructor called 'Shape' which is the blueprint for the user input with fixed Width and Height values
class Shape {
    constructor(text, color, shape) {
      this.text = text;
      this.color = color;
      this.shape = shape;
      this.width = 300;
      this.height = 200;
    }
  }

// Creating a class called 'Circle' which is derived from the 'Shape' constructor - using render method to mold the shape
  class Circle extends Shape {
    constructor(text, color, shape) {
      super(text, color, shape);
    }

    render() {
      return `<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${this.height / 2}" fill="${this.shape}"/><text x="${this.width / 2}" y="${this.height / 2 + 20}" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
  }

  // Creating a class called 'Square' which is derived from the 'Shape' constructor - using render method to mold the shape
  class Square extends Shape {
    constructor(text, color, shape) {
      super(text, color, shape);
    }

    render() {
      return `<rect x="${(this.width - this.height) / 2}" y="0" width="${this.height}" height="${this.height}" fill="${this.shape}"/><text x="${this.width / 2}" y="${this.height / 2 + 20}" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
  }

  // Creating a class called 'Triangle' which is derived from the 'Shape' constructor - using render method to mold the shape
  class Triangle extends Shape {
    constructor(text, color, shape) {
      super(text, color, shape);
    }

    render() {
      return `<polygon points="${this.width / 2} 0 0 ${this.height} ${this.width} ${this.height}" fill="${this.shape}"/><text x="${this.width / 2}" y="${this.height / 2 + 50}" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
  }

// Exporting shapes -- keeping export at bottom of code for standards
  module.exports = {Circle, Square, Triangle};