const Robot = require("./robot");

function robotLecture(input) {
    let grid = {
      length: input[0].split(" ")[0],
      height: input[0].split(" ")[1]
    }
    let scents = []
    input.shift();
    let robots = [];
    let robotsLength = input.length%2 === 0 ? input.length/2 : Math.floor(input.length/2) + 1;
  
    for (i = 1; i <= robotsLength; i++) {
      let coordinates = input[i*2 - 2];
      let commands = (input[i*2 - 1]) ? input[i*2 - 1] : "No command"
      let robot = new Robot(i, coordinates, commands, scents, grid)
      robots.push(robot)
      robot.scents = scents
    }
    return robots
  }

  module.exports = robotLecture;