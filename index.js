// including shapes, fs and inquirer for user inputs
const {Circle, Square, Triangle} = require("./lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");

// user input section using inquirer for prompts
inquirer
    .prompt([

        {
            type: "input",
            message: "Enter the text you would like on the logo (between 1-3 char)",
            name: "text",
            validate: (text) => text.length <= 3 && text.length >= 1
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