
class Point {
    
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }
}

let x=0, y=0;


const directions = [
    () => x++,
    () => y++,
    () => x--,
    () => y--
];

let directionIndex = 0;

const TARGET = 289326;
let currNum = 0;

let points = [];
points.push(new Point(0, 0, 1));

let steps = 1;
while (currNum < TARGET) {
    walkSide();
    incrementDirection();
    walkSide();
    incrementDirection();
    steps++;
}

function walkSide() {
    for (let i = 0; i < steps; i++) {
        currNum = sumAdjacent(x, y);
        if (currNum > TARGET) {
            console.log("The first value larger than " + TARGET + " is " + currNum)
        }
        if (!(x == 0 && y == 0)) {
            // we already add that point initially
            points.push(new Point(x, y, currNum));
        }
        console.log(currNum);
        directions[directionIndex].call();
    }
}

function sumAdjacent(x, y) {
    let sum = 0;
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            const testX = x + dx;
            const testY = y + dy;
            const adjacent = findPoint(testX, testY);
            if (adjacent) {
                sum += adjacent.value;
            }
        }
    }
    return sum;
}

function findPoint(x, y) {
    return points.find(point => point.x == x && point.y == y);
}

function incrementDirection() {
    directionIndex = (directionIndex+1)%directions.length;
}