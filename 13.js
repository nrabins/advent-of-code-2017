const input = `0: 5
1: 2
2: 3
4: 4
6: 6
8: 4
10: 8
12: 6
14: 6
16: 14
18: 6
20: 8
22: 8
24: 10
26: 8
28: 8
30: 10
32: 8
34: 12
36: 9
38: 20
40: 12
42: 12
44: 12
46: 12
48: 12
50: 12
52: 12
54: 12
56: 14
58: 14
60: 14
62: 20
64: 14
66: 14
70: 14
72: 14
74: 14
76: 14
78: 14
80: 12
90: 30
92: 17
94: 18`;

const testInput = `0: 3
1: 2
4: 4
6: 4`;

const gates = [];
input.split("\n").forEach(gate => {
    const chunks = gate.split(": ")
    const depth = parseInt(chunks[0]);
    const range = parseInt(chunks[1]);
    const cycle = (range - 1) * 2;
    gates.push({
        depth,
        range,
        cycle
    });
});

let delay = 0,
    detected = true;
    
while (detected) {
    detected = false;
    gates.every(gate => {
        const collides = (gate.depth + delay) % gate.cycle == 0;
        if (collides) {
            // if (delay % 1000 == 0) 
                // console.log('delay of ' + delay + ' collides at ' + gate.depth);
            detected = true;
            delay++;
            return false;
        }
        return true;
    });
}

console.log('delay of ' + delay + ' has no collisions');

/*
let delay = 10000; // seed because can't be bothered to redo the first 10000
let detected = true;
let bonked = 0;
while (detected) {
    if (delay % 2 == 1) {
        delay++;
    }
    detected = false;
    bonked = 0;
    const gates = {};
    input.split("\n").forEach(gate => {
        const depth = gate.split(": ")[0];
        const range = parseInt(gate.split(": ")[1]);
        gates[depth] = {range: range, location: 0, reverse: false};
    });

    for (let i = 0; i < delay; i++) {
        advanceGates(gates);
    }

    const max = Math.max(... (Object.getOwnPropertyNames(gates).map(key => parseInt(key))));
    
    let sum = 0;
    for (let i = 0; i <= max; i++) {
        // check collisions
        if (gates.hasOwnProperty(i) && gates[i].location == 0) {
            const severity = i * gates[i].range;
            sum += severity;
            bonked = i;
            detected = true;
            break;
        }
    
        // advance layers
        advanceGates(gates);
    }

    if (detected) {
        console.log("delay of " + delay + " bonked at " + bonked);
        delay++;
    } else {
        console.log("delay of " + delay + " allowed access!");
    }
    
    //console.log('severity sum: ' + sum);
}



function advanceGates(gates) {
    Object.getOwnPropertyNames(gates).forEach(gateName => {
        const gate = gates[gateName];
        if (gate.reverse) {
            gate.location--;
        } else {
            gate.location++;
        }

        if (gate.location == 0 || gate.location == gate.range-1) {
            gate.reverse = !gate.reverse;
        }
    });
}

*/