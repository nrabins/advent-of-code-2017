const testing = false;

const STEP_SIZE = testing ? 3 : 356,
  UPPER_BOUND = testing ? 9 : 50000000;

let bufferSize = 1;
let p = 0;
let valueAfterZero;

for (let i = 1; i <= UPPER_BOUND; i++) {
  p = (p + STEP_SIZE + 1) % bufferSize;
  if (p == 0) {
    valueAfterZero = i;
  }
  // console.log(i, valueAfterZero);
  bufferSize++;
}

console.log('value after zero is ' + valueAfterZero);