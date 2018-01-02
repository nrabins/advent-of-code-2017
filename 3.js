let x=0, y=0;

let num = 1;
const TARGET = 289326;

const directions = [
    () => x++,
    () => y++,
    () => x--,
    () => y--
];

let dirInd = 0;

var steps = 1;
while (num <= TARGET) {
    walkSide();
    incrementDirection();
    walkSide();
    incrementDirection();
    steps++;
}

function walkSide() {
    for (let i = 0; i < steps; i++) {
        num++;
        directions[directionIndex].call();
        const distance = Math.abs(x) + Math.abs(y);
        if (num == TARGET) {
            console.log([num, distance, x, y]);
        }
    }
}

function incrementDirection() {
    directionIndex = (directionIndex+1)%directions.length;
}