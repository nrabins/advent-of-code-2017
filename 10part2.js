const input = `94,84,0,79,2,27,81,1,123,93,218,23,103,255,254,243`;
const testInputs = [
    ``,
    `AoC 2017`,
    `1,2,3`,
    `1,2,4`
];
    
const RING_SIZE = 256;

testInputs.forEach(input => { 
    const hash = hashify(input);
    console.log(input, hash);
});

function hashify(input) {
    const values = [];
    for (let i = 0; i < RING_SIZE; i++) {
        values.push(i);
    }

    const steps = input.split('').map(c => c.charCodeAt(0)).concat([17, 31, 73, 47, 23]);

    let skipSize = 0;
    let i = 0;
    for (let round = 0; round < 64; round++) {
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
    }

    const output = [];
    for (let offset = 0; offset < 16; offset++) {
        toXor = values.slice(offset*16, (offset+1)*16);
        let xored = groupXor(toXor)
        output.push(xored);
    }

    const hash = output.map(xored => {
        return ("0" + xored.toString(16)).substr(-2);
    }).join("");

    return hash;
}

function groupXor(toXor) {
    let xored = toXor[0];
    for (let i = 1; i < toXor.length; i++) {
        xored = xored ^ toXor[i];
    }
    return xored;
}

console.log('puzzle hash: ' + hashify(input));