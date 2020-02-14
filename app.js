const readline = require("readline");
const readInput = require("./readInput");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log("PLEASE, SAY SOMETHING");

let inputs = [];

rl.on("line", line => {
  if (line === "go") {
    console.log(readInput(inputs));


    rl.close();
  } else if (notNewLine(line)) {
    inputs.push(line);
  }
});

const notNewLine = line => line.replace(/(\r|\n)/g, "") !== "";