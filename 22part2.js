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

const STATUS = {
  CLEAN: 0,
  WEAKENED: 1,
  INFECTED: 2,
  FLAGGED: 3
}

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
      bits[`${x-offset},${y-offset}`] = STATUS.INFECTED;
    }
  });
});

let x = 0;
let y = 0;
let direction = DIRECTION.UP;

const BURST_COUNT = TESTING ? 100 : 10000000;

let infections = 0;

for (let burst = 1; burst <= BURST_COUNT; burst++) {
  const status = bits[`${x},${y}`] || STATUS.CLEAN;

  switch (status) {
    case STATUS.CLEAN: direction--; break;
    case STATUS.WEAKENED: /* do nothing */ break;
    case STATUS.INFECTED: direction++; break;
    case STATUS.FLAGGED: direction += 2; break; // turn around
  };
  
  direction = mod(direction, 4);
  
  switch (status) {
    case STATUS.CLEAN: bits[`${x},${y}`] = STATUS.WEAKENED; break;
    case STATUS.WEAKENED: bits[`${x},${y}`] = STATUS.INFECTED; infections++; break;
    case STATUS.INFECTED: bits[`${x},${y}`] = STATUS.FLAGGED; break;
    case STATUS.FLAGGED: delete bits[`${x},${y}`]; break;
  };

  switch (direction) {
    case DIRECTION.UP: y--; break;
    case DIRECTION.DOWN: y++; break;
    case DIRECTION.LEFT: x--; break;
    case DIRECTION.RIGHT: x++; break;
  }
}

console.log(infections);


