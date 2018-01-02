const testing = false;

const STEP_SIZE = testing ? 3 : 356,
  UPPER_BOUND = testing ? 2017 : 2017;

const buffer = [0];
let p = 0;

for (let i = 1; i <= UPPER_BOUND; i++) {
  p = (p + STEP_SIZE) % buffer.length;
  buffer.splice(++p, 0, i);
}

const searchIndex = buffer.indexOf(2017);
const afterIndex = (searchIndex+1)%buffer.length;

console.log(buffer[afterIndex]);

