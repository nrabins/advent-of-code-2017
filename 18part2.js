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

const TEST_INPUT = `snd 1
snd 2
snd p
rcv a
rcv b
rcv c
rcv d`;

const input = TESTING ? TEST_INPUT : ADVENT_INPUT;

class Instruction {
  constructor (str) {
    const chunks = str.split(" ");
    this.type = chunks[0];
    this.params = chunks.slice(1);
  }
}

class Program {
  constructor(id, instructionLines, sndFn) {
    this.id = id;
    
    this.registers = {};
    this.instructions = instructionLines.split('\n').map(line => {
      const params = line.split(' ').slice(1);
      params.forEach(param => {
        if (param.length == 1 && param.match(/[a-z]/i)) {
          this.registers[param] = 0;
        }
      })
      return new Instruction(line);
    });

    this.registers['p'] = id;

    this.sndFn = sndFn;
    this.instructionIndex = 0;
    this.isWaiting = false;
    this.isTerminated = false;
    this.receivedValues = [];

    this.sndCount = 0;
  }

  registerListener(otherProgram) {
    this.sndFn = function(val) {
      otherProgram.receivedValues.push(val);
      otherProgram.isWaiting = false;
    }
  }

  intify(param) {
    return param.match(/[a-z]/i) ? this.registers[param] : parseInt(param);  
  }

  runInstruction() {
    const instruction = this.instructions[this.instructionIndex];
    let jumped = false;
    switch (instruction.type) {
      case 'snd': 
        this.sndFn(this.intify(instruction.params[0]));
        this.sndCount++;
        break;
      case 'set':
        this.registers[instruction.params[0]] = this.intify(instruction.params[1]);
        break;
      case 'add': 
        this.registers[instruction.params[0]] += this.intify(instruction.params[1]);
        break;
      case 'mul':
        this.registers[instruction.params[0]] *= this.intify(instruction.params[1]);
        break;
      case 'mod': 
        this.registers[instruction.params[0]] %= this.intify(instruction.params[1]);
        break;
      case 'rcv': 
        if (this.receivedValues.length == 0) {
          this.isWaiting = true;
          return;
        } else {
          this.isWaiting = false;
          this.registers[instruction.params[0]] = this.receivedValues.shift();
        }
        break;
      case 'jgz': 
        if (this.intify(instruction.params[0]) > 0) {
          this.instructionIndex += this.intify(instruction.params[1]);
          jumped = true;
        }
        break;
      default: 
        console.log('unrecognized type! ' + this.type);
        debugger;
        break;
    }
  
    if (!jumped) {
      this.instructionIndex++;
    }
    if (this.instructionIndex < 0 || this.instructionIndex >= this.instructions.length) {
      this.isTerminated = true;
    }
  }
}

const program0 = new Program(0, input);
const program1 = new Program(1, input);

program0.registerListener(program1);
program1.registerListener(program0);

while (!(program0.isTerminated && program1.isTerminated) && !(program0.isWaiting && program1.isWaiting)) {
  if (!program0.isWaiting) {
    program0.runInstruction();
  }
  if (!program1.isWaiting) {
    program1.runInstruction();
  }
}

console.log('program0 sent ' + program0.sndCount + ' values');
console.log('program1 sent ' + program1.sndCount + ' values');