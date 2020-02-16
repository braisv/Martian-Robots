const gridLecture = require("./grid");
const robotLecture = require("./robotArray");

class Lecture {
    constructor(input){
        this.input = input;
        this.grid = gridLecture(input);
        this.robots = robotLecture(input)

    }
}

module.exports = Lecture;