const adventInput = [783, 325];
const testInput = [65, 8921];
// const UPPER_BOUND = 1056;
const UPPER_BOUND = 5000000;
const onePercent = UPPER_BOUND / 100;

const multiplier = [16807, 48271]
const divisibleBy = [4, 8];

const values = adventInput;

let equalsSum = 0;

for (let trial = 0; trial < UPPER_BOUND; trial++) {
  if (trial % onePercent == 0) {
    console.log(trial/UPPER_BOUND*100 + "% - " + equalsSum);
  }

  const lowestBinaries = [];

  for (let i = 0; i < values.length; i++) {
    let found = false;
    while (!found) {
      values[i] = (values[i] * multiplier[i]) % 2147483647;
      if (values[i] % divisibleBy[i] == 0) {
        found = true;
        lowestBinaries.push(('000000000000' + values[i].toString(2)).slice(-16));
      }
    }
  }

   // compare all values to first to see if they all match
   if (lowestBinaries.every((lb , i, arr) => i == 0 || lb == arr[0])) {
    console.log('found match at ' + trial);
    equalsSum++;
  }
}

console.log('total number of matches: ' + equalsSum);