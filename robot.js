class Robot {
  constructor(id, coordinates, commands, scents, grid) {
    this.id = id;
    this.coordinates = coordinates;
    this.commands = commands;
    this.position = {
      x: 0,
      y: 0
    };
    this.orientation;
    this.lost = false;
    this.scents = scents;
    this.grid = grid;
    this.output = "";
    this.finalPosition();
  }

  finalPosition() {
    this.position = {
      x: +this.coordinates.split(" ")[0],
      y: +this.coordinates.split(" ")[1]
    };
    this.orientation = this.coordinates.split(" ")[2];

    let commandArray = this.commands.split("");

    if (commandArray.length >= 100)
    throw new Error("The limit of commands is 99");

    commandArray.map(command => {
      if (!this.lost) {
        this.moveRobot(command);
      }
    });

    let finalPosition = `${this.position.x} ${this.position.y} ${this.orientation}`;
    finalPosition = this.lost ? finalPosition + ` LOST` : finalPosition;

    this.output = finalPosition;
  }

  moveRobot(command) {
    switch (command) {
      case "F":
        if (
          !this.scents.includes(
            `${this.position.x} ${this.position.y} ${this.orientation}`
          )
        ) {
          this.moveForward();
        }
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
      this.position.x--;
      this.scents.push(
        `${this.position.x} ${this.position.y} ${this.orientation}`
      );
    }

    if (this.position.x < 0) {
      this.lost = true;
      this.position.x++;
      this.scents.push(
        `${this.position.x} ${this.position.y} ${this.orientation}`
      );
    }

    if (this.position.y > this.grid.height) {
      this.lost = true;
      this.position.y--;
      this.scents.push(
        `${this.position.x} ${this.position.y} ${this.orientation}`
      );
    }

    if (this.position.y < 0) {
      this.lost = true;
      this.position.y++;
      this.scents.push(
        `${this.position.x} ${this.position.y} ${this.orientation}`
      );
    }
  }
}

module.exports = Robot;
