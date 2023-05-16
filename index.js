// including shape classes
const {Circle, Square, Triangle} = require("./lib/shapes");

// including fs + inquirer packages for user input
const fs = require("fs");
const inquirer = require("inquirer");

// function for creating the SVG using user data
function createSvg(data) {

    switch (data.shapeChoice) {

      case "circle":
        const circleShape = new Circle(
          data.text,
          data.color,
          data.shape
        );

        return circleShape.render();

      case "square":
        const squareShape = new Square(
          data.text,
          data.color,
          data.shape
        );

        return squareShape.render();

      case "triangle":
            const triangleShape = new Triangle(
              data.text,
              data.color,
              data.shape
            );

            return triangleShape.render();

      default:
        console.log("Invalid Shape");
    }
  }

// user input section using inquirer for prompts
inquirer
    .prompt([

        {
            type: "input",
            message: "Enter the text you would like on the logo (between 1-3 char)",
            name: "text",
            validate: (text) => text.length <= 3 && text.length > 0
        },

        {
            type: "input",
            message: "Enter the desired color of the text",
            name: "color"
        },

        {
            type: "list",
            message: "Select the desired shape of the logo",
            name: "shapeChoice",
            choices: ["Circle", "Square", "Triangle"]
        },

        {
            type: "input",
            message: "Enter the desired color of the shape",
            name: "shape"
        },
    ])
    .then((data) => {

        // assigns createSvg function return to 'svg' variable
        let svg = createSvg(data);

        // baseline template for svg file
        let baseSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;

        fs.writeFile("./examples/logo.svg", baseSvg, (err) => {
          if (err) throw err;
          console.log("Generated logo.svg");
        });
      });