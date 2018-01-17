const TESTING = false;

const adventInput = `Begin in state A.
Perform a diagnostic checksum after 12861455 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state C.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state E.

In state C:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state E.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state D.

In state D:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.

In state E:
  If the current value is 0:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state A.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the right.
    - Continue with state F.

In state F:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state E.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`;

const testInput = `Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state B.
  If the current value is 1:
    - Write the value 0.
    - Move one slot to the left.
    - Continue with state B.

In state B:
  If the current value is 0:
    - Write the value 1.
    - Move one slot to the left.
    - Continue with state A.
  If the current value is 1:
    - Write the value 1.
    - Move one slot to the right.
    - Continue with state A.`;

const input = TESTING ? testInput : adventInput;

class Instruction {
  constructor(lines) {
    this.input = lines[0].trimLeft().replace(":", "").split(" ")[5];
    
    this.output = lines[1].trimLeft().replace(".", "").split(" ")[4];

    let direction = lines[2].trimLeft().replace(".", "").split(" ")[6];
    this.offset = direction == "right" ? 1 : -1;
    
    this.nextState = lines[3].trimLeft().replace(".", "").split(" ")[4];
  }
}

class State {
  constructor(paragraph) {
    const lines = paragraph.split('\n');
    this.name = lines[0].replace(":", "").split(" ")[2];
    this.instructions = {};
    
    for (let i = 1; i < lines.length; i += 4) {
      const instruction = new Instruction(lines.slice(i, i+4));
      this.instructions[instruction.input] = instruction;
    }
  }
}


const lines = input.split("\n");

let currentState = lines[0].replace(".", "").split(" ")[3];
let checksumIteration = parseInt(lines[1].split(" ")[5])

const paragraphs = input.split("\n\n");

const states = {};

for (let i = 1; i < paragraphs.length; i++) {
  const state = new State(paragraphs[i]);
  states[state.name] = state;
}

const tape = {};
let cursor = 0;

for (let i = 0; i < checksumIteration; i++) {
  const state = states[currentState];
  const value = tape.hasOwnProperty(cursor) ? tape[cursor] : "0";
  const instruction = state.instructions[value];
  
  if (instruction.output == "0") {
    delete tape[cursor];
  } else {
    tape[cursor] = instruction.output;
  }

  cursor += instruction.offset;
  currentState = instruction.nextState;
}

console.log(`There are ${Object.getOwnPropertyNames(tape).length} bits turned on`);