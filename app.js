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
    let processInput = new Lecture(input);
    rl.close();
    return processInput.grid;


  } else if (notNewLine(line)) {
    input.push(line);
  }
});

const notNewLine = line => line.replace(/(\r|\n)/g, "") !== "";