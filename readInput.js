const gridLecture = require("./grid");
const robotLecture = require("./robotArray");

class Lecture {
    constructor(input){
        this.grid = gridLecture(input);
        this.robots = robotLecture(input);
        this.output = ""
        this.buildOutput()
    }

    buildOutput() {
        this.robots.map(robot => this.output = this.output + robot.output + "\n")
    }

    printGrid() {
        console.log(' ')
        console.log(' ')
        console.log('===========================================')
        console.log('===========================================')
        console.log(' ')
        console.log('MARTIAN ROBOTS')
        console.log(' ')
        console.log('===========================================')
        console.log('===========================================')
        console.log(' ')
        this.robots.map(robot => this.grid.map[this.grid.height - 1 - robot.position.y][robot.position.x] = `${robot.id}`)
        console.log(this.grid.map)
        console.log(' ')
        console.log('===========================================')
        console.log('===========================================')
        console.log(' ')
        console.log(this.output)
        console.log(' ')
        console.log('===========================================')
        console.log('===========================================')
        console.log(' ')
        console.log(' ')
    }
}

module.exports = Lecture;