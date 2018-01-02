const adventInput = [783, 325];
const testInput = [65, 8921];
// const UPPER_BOUND = 5;
const UPPER_BOUND = 40000000;
const onePercent = UPPER_BOUND / 100;

const multiplier = [16807, 48271]

const values = adventInput;

let equalsSum = 0;

for (let run = 0; run < UPPER_BOUND; run++) {
  if (run % onePercent == 0) {
    console.log(run/UPPER_BOUND*100 + "% - " + equalsSum);
  }
  const lowestBinaries = [];
  for (let i = 0; i < values.length; i++) {
    values[i] = (values[i] * multiplier[i]) % 2147483647;
    lowestBinaries.push(('000000000000' + values[i].toString(2)).slice(-16));
  }

  // compare all values to first to see if they all match
  if (lowestBinaries.every((lb , i, arr) => i == 0 || lb == arr[0])) {
    equalsSum++;
  }
}

console.log('number of equal lowest binaries: ' + equalsSum);