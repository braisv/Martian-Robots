const readline = require("readline");
const Lecture = require("./readInput");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log("PLEASE, INTRODUCE COMMAND WITH THE RIGHT FORMAT AND WRITE $send");

let input = [];

rl.on("line", line => {
  if (line === "send") {
      rl.close();
      let processInput = new Lecture(input);
      processInput.printGrid()
    return processInput.output;


  } else if (notNewLine(line)) {
    input.push(line);
  }
});

const notNewLine = line => line.replace(/(\r|\n)/g, "") !== "";