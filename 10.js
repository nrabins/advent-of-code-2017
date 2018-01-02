const input = `94,84,0,79,2,27,81,1,123,93,218,23,103,255,254,243`;
const testInput = `3,4,1,5`
const RING_SIZE = 256;

const steps = input.split(',').map(i => parseInt(i));

const values = [];
for (let i = 0; i < RING_SIZE; i++) {
    values.push(i);
}

let skipSize = 0;
let i = 0;
for (let iStep = 0; iStep < steps.length; iStep++) {
    const step = steps[iStep];
    for (let j = 0; j < (step-1)/2; j++) {
        const a = i + j;
        const b = i + step - 1 - j;
        const aMod = a % RING_SIZE;
        const bMod = b % RING_SIZE;
        const temp = values[aMod];
        values[aMod] = values[bMod];
        values[bMod] = temp;
    }
    i = (i + step + skipSize) % RING_SIZE;
    skipSize++;
}

console.log("hash:" + values[0]*values[1], "values:" + values);
