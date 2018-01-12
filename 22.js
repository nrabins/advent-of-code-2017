const TESTING = false;

const adventInput = `.......##.#..####.#....##
..###....###.####..##.##.
#..####.#....#.#....##...
.#....#.#.#....#######...
.###..###.#########....##
##...#####..#####.###.#..
.#..##.###.#.#....######.
.#.##.#..####..#.##.....#
#.#..###..##..#......##.#
##.###.##.#.#...##.#.##..
##...#.######.#..##.#...#
....#.####..#..###.##..##
...#....#.###.#.#..#.....
..###.#.#....#.....#.####
.#....##..##.#.#...#.#.#.
...##.#.####.###.##...#.#
##.#.####.#######.##..##.
.##...#......####..####.#
#..###.#.###.##.#.#.##..#
#..###.#.#.#.#.#....#.#.#
####.#..##..#.#..#..#.###
##.....#..#.#.#..#.####..
#####.....###.........#..
##...#...####..#####...##
.....##.#....##...#.....#`;

const testInput = `..#
#..
...`;

const input = TESTING ? testInput : adventInput;

const DIRECTION = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
};

// getting around the javascript "bug" where, for example, -1 % 4 = -1
function mod(n, m) {
  return ((n % m) + m) % m;
}

// both inputs are square and odd on the sides, we're going to subtract the starting position of our virus to get the relative position of each on node
let offset = TESTING ? 1 : 12;

const bits = {};

input.split("\n").forEach((row, y) => {
  row.split("").forEach((c, x) => {
    if (c === "#") {
      bits[`${x-offset},${y-offset}`] = true;
    }
  });
});

let x = 0;
let y = 0;
let direction = DIRECTION.UP;

const BURST_COUNT = TESTING ? 70 : 10000;

let infections = 0;

for (let burst = 1; burst <= BURST_COUNT; burst++) {
  const isCurrentNodeInfected = bits.hasOwnProperty(`${x},${y}`);
  
  direction = mod(direction + (isCurrentNodeInfected ? 1 : -1),  4);
  
  if (isCurrentNodeInfected) {
    delete bits[`${x},${y}`];
  } else {
    infections++;
    bits[`${x},${y}`] = true;
  }

  switch (direction) {
    case DIRECTION.UP: y--; break;
    case DIRECTION.DOWN: y++; break;
    case DIRECTION.LEFT: x--; break;
    case DIRECTION.RIGHT: x++; break;
  }
}

console.log(infections);


