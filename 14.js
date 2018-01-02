// from 10part2.js
const RING_SIZE = 256;
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
//////
function to4DigitHex(c) {
    return ('0000' + parseInt(c, 16).toString(2)).slice(-4)
}

function binarify(str) {
    return str.split('').map(to4DigitHex).join('');
}

function binaryHash(str) {
    return binarify(hashify(str));
}


const input = `jzgqcdpd`,
    testInput = `flqrgnkx`;

const strRows = [];
const rows = [];
for (let rowIdx = 0; rowIdx < 128; rowIdx++) {
    const strRep = binaryHash(input + '-' + rowIdx);

    // string representation
    strRows.push(strRep);

    // binary field representation
    const row = [];
    for (let colIdx = 0; colIdx < strRep.length; colIdx++) {
        row.push(strRep[colIdx] == '1')
    }
    rows.push(row);
}

const bigStr = strRows.join("\n");
console.log((bigStr.match(/1/g) || []).length);

/// part 2
function countGroups(arr) {
    const seen = arr.map(row => row.map(cell => !cell));
    
    function traverseAdjacent(x, y) {
        seen[y][x] = true;
    
        for (let yDiff = -1; yDiff <= 1; yDiff++) {
            const testY = y + yDiff;
            if (testY < 0 || testY >= seen.length) {
                continue;
            }
            for (let xDiff = -1; xDiff <= 1; xDiff++) {
                // remove diagonals and self
                if (Math.abs(xDiff) == Math.abs(yDiff)) {
                    continue;
                }
                const testX = x + xDiff;
                if (testX < 0 || testX >= seen[testY].length) {
                    continue;
                }
                if (!seen[testY][testX]) {
                    traverseAdjacent(testX, testY);
                }
            }
        }
    }
    
    let groupCount = 0;
    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[y].length; x++) {
            if (!seen[y][x]) {
                traverseAdjacent(x, y);
                groupCount++;
            }
        }
    }
    return groupCount;
}

const testArr = [
    [true, true],
    [true, false],
    [true, true],
    [false, true]
];

console.log('there are ' + countGroups(rows) + ' groups');