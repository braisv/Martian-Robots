class Robot {
  constructor(id, coordinates, commands, grid) {
    this.id = id;
    this.coordinates = coordinates;
    this.commands = commands;
    this.position = {
      x: 0,
      y: 0
    };
    this.orientation;
    this.lost = false;
    this.grid = grid;
    this.output = "";
    this.finalPosition();
    return this.output;
  }

  finalPosition() {
    this.position = {
      x: +this.coordinates[0],
      y: +this.coordinates[1]
    };
    this.orientation = this.coordinates[2];

    let commandArray = this.commands.split("");
    commandArray.map(command => {
      if (!this.lost) {
        moveRobot(command);
      } else {
        break;
      }
    });

    let finalPosition = `${this.position.x} ${this.position.y} ${this.orientation}`;
    finalPosition = this.lost ? finalPosition + ` LOST` : finalPosition;

    this.output = finalPosition;
  }

  moveRobot(command) {
    switch (command) {
      case "F":
        this.moveForward();
        break;
      case "L":
        this.turnLeft();
        break;
      case "R":
        this.turnRight();
        break;
      default:
        break;
    }
  }

  moveForward() {
    switch (this.orientation) {
      case "N":
        this.position.y++;
        break;
      case "S":
        this.position.y--;
        break;
      case "E":
        this.position.x++;
        break;
      case "W":
        this.position.x--;
        break;
      default:
        break;
    }
    this.checkPosition();
  }

  turnLeft() {
      switch (this.orientation) {
        case "N":
          this.orientation = "W";
          break;
        case "S":
          this.orientation = "E";
          break;
        case "E":
          this.orientation = "N";
          break;
        case "W":
          this.orientation = "S";
          break;
        default:
          break;
      }
    }
    
    turnRight() {
      switch (this.orientation) {
        case "N":
          this.orientation = "E";
          break;
        case "S":
          this.orientation = "W";
          break;
        case "E":
          this.orientation = "S";
          break;
        case "W":
          this.orientation = "N";
          break;
        default:
          break;
      }
    }

  checkPosition() {
    if (this.position.x > this.grid.length) {
        this.lost = true;
        this.position.x--
    }

    if (this.position.x < 0) {
        this.lost = true;
        this.position.x++
    }

    if (this.position.y > this.grid.height) {
        this.lost = true;
        this.position.y--
    }

    if (this.position.y < 0) {
        this.lost = true;
        this.position.y++
    }
  }
}

module.exports = Robot;
