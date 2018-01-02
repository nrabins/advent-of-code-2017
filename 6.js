const input = '10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6';

const testInput = '0 2 7 0';

let values = input.split('\t').map(x => parseInt(x));

let duplicateDetected = false,
    steps = 0,
    history = [values.slice(0)];

while (!duplicateDetected) {
    steps++;

    const max = Math.max(...values);
    let i = values.findIndex(val => val == max);
    let toDistribute = values[i];
    values[i] = 0;

    while (toDistribute > 0) {
        i = (i + 1) % values.length;
        values[i]++;
        toDistribute--;
    }

    const previousOccurrenceIndex = history.findIndex(arr => areEqual(arr, values));
    if (previousOccurrenceIndex != -1) {
        duplicateDetected = true;
        console.log(`found duplicate of step ${previousOccurrenceIndex} on step ${steps} (loop is ${steps-previousOccurrenceIndex} cycles)` )
    }

    history.push(values.slice(0));
}

console.log(steps);

function areEqual(a, b) {
    return a.length==b.length && a.every((v,i)=> v === b[i])
}