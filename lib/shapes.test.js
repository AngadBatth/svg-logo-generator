// including individual shapes from shapes.js
const {Circle, Square, Triangle } = require("./shapes");

// jest test for circle class
describe("Circle", () => {

    it("it should be successful when the parameters use ABC,black,green", () => {

      let circle = new Circle("ABC", "black", "green");
      expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="green"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="black">ABC</text>`);
    });
  });

  // jest test for square class
  describe("Square", () => {

    it("it should be successful when the parameters use ABC,black,green", () => {

      let square = new Square("ABC", "black", "green");
      expect(square.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="green"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="black">ABC</text>`);
    });
  });

  // jest test for triangle
  describe("Triangle", () => {

    it("it should be successful when the parameters use ABC,black,green", () => {

      let triangle = new Triangle("ABC", "black", "green");
      expect(triangle.render()).toEqual(`<polygon points="150 0 0 200 300 200" fill="green"/><text x="150" y="150" font-size="50" text-anchor="middle" fill="black">ABC</text>`);
    });
  });
