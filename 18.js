const TESTING = false;
const ADVENT_INPUT = `set i 31
set a 1
mul p 17
jgz p p
mul a 2
add i -1
jgz i -2
add a -1
set i 127
set p 735
mul p 8505
mod p a
mul p 129749
add p 12345
mod p a
set b p
mod b 10000
snd b
add i -1
jgz i -9
jgz a 3
rcv b
jgz b -1
set f 0
set i 126
rcv a
rcv b
set p a
mul p -1
add p b
jgz p 4
snd a
set a b
jgz 1 3
snd b
set f 1
add i -1
jgz i -11
snd a
jgz f -16
jgz a -19`;

const TEST_INPUT = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;

const input = TESTING ? TEST_INPUT : ADVENT_INPUT;

class Instruction {
  constructor (str) {
    const chunks = str.split(" ");
    this.type = chunks[0];
    this.params = chunks.slice(1);
  }
}

const registers = {};

function intify(param) {
  return param.match(/[a-z]/i) ? registers[param] : parseInt(param);  
}

const instructions = input.split('\n').map(line => {
  const params = line.split(' ').slice(1);
  params.forEach(param => {
    if (param.length == 1 && param.match(/[a-z]/i)) {
      registers[param] = 0;
    }
  })

  return new Instruction(line);
});

let lastSound;

let instructionIndex = 0;
while (instructionIndex >= 0 && instructionIndex < instructions.length) {
  const instruction = instructions[instructionIndex];
  let jumped = false;
  switch (instruction.type) {
    case 'snd': 
      lastSound = intify(instruction.params[0]);
      break;
    case 'set':
      registers[instruction.params[0]] = intify(instruction.params[1]);
      break;
    case 'add': 
      registers[instruction.params[0]] += intify(instruction.params[1]);
      break;
    case 'mul':
      registers[instruction.params[0]] *= intify(instruction.params[1]);
      break;
    case 'mod': 
      registers[instruction.params[0]] %= intify(instruction.params[1]);
      break;
    case 'rcv': 
      if (intify(instruction.params[0]) != 0) {
        console.log('recovered last sound = ' + lastSound);
        debugger;
      }
      break;
    case 'jgz': 
      if (intify(instruction.params[0]) > 0) {
        instructionIndex += intify(instruction.params[1]);
        jumped = true;
      }
      break;
    default: 
      console.log('unrecognized type! ' + this.type);
      debugger;
      break;
  }

  if (!jumped) {
    instructionIndex++;
  }
}