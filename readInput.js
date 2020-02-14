const grid = require("./grid");

const readInput = (input) => {
    let commands = input.join(" ").split(' ')
    grid(+commands[0], +commands[1])

    return commands
}

module.exports = readInput;

