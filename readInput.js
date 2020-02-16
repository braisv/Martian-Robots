const gridLecture = require("./grid");

class Lecture {
    constructor(input){
        this.input = input;
        this.grid = gridLecture(input);

    }
}

module.exports = Lecture;