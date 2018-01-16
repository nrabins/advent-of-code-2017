const TESTING = false;
const ADVENT_INPUT = `set b 65
set c b
jnz a 2
jnz 1 5
mul b 100
sub b -100000
set c b
sub c -17000
set f 1
set d 2
set e 2
set g d
mul g e
sub g b
jnz g 2
set f 0
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz f 2
sub h -1
set g b
sub g c
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`;

const TEST_INPUT = `set a 1`;

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

registers['a'] = 1;

let mulCount = 0;

let instructionIndex = 0;
while (instructionIndex >= 0 && instructionIndex < instructions.length) {
  const instruction = instructions[instructionIndex];
  let jumped = false;
  switch (instruction.type) {
    case 'set':
      registers[instruction.params[0]] = intify(instruction.params[1]);
      break;
    case 'mul':
      registers[instruction.params[0]] *= intify(instruction.params[1]);
      mulCount++;
      break;
    case 'sub': 
      registers[instruction.params[0]] -= intify(instruction.params[1]);
      break;
    case 'jnz': 
      if (intify(instruction.params[0]) != 0) {
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

  printRegisters();
}

function printRegisters() {
  console.log(`${registers.a} | ${registers.b} | ${registers.c} | ${registers.d} | ${registers.e} | ${registers.f} | ${registers.g} | ${registers.h}`);
}

console.log(`mul count = ${mulCount}`);