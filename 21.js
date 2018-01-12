const adventInput = `../.. => .#./###/##.
#./.. => ..#/.#./#.#
##/.. => ###/#../...
.#/#. => .#./..#/##.
##/#. => ..#/#.#/###
##/## => .##/.##/.#.
.../.../... => #.#./..##/##../###.
#../.../... => .###/.##./.##./....
.#./.../... => ####/..../..../.#.#
##./.../... => #.../#..#/#.../###.
#.#/.../... => ..##/###./..#./.#..
###/.../... => #.../#.#./..#./#.#.
.#./#../... => #.#./..#./.#../...#
##./#../... => ###./.###/#.##/.#..
..#/#../... => .##./.##./####/####
#.#/#../... => ..##/.#.#/##../#.##
.##/#../... => ...#/..##/...#/#...
###/#../... => ..../##.#/..#./###.
.../.#./... => ###./..##/#..#/#.#.
#../.#./... => #..#/..#./#.##/#..#
.#./.#./... => ##.#/..../...#/....
##./.#./... => #.#./.##./.###/####
#.#/.#./... => ####/.##./.#../##.#
###/.#./... => #.##/..../.#.#/.##.
.#./##./... => ##.#/#.##/#.##/..##
##./##./... => .###/..../#.../..#.
..#/##./... => ..../.#../..#./##..
#.#/##./... => #.##/##../..##/.#.#
.##/##./... => ..../..#./#..#/....
###/##./... => #..#/#.##/##.#/..##
.../#.#/... => ..../#.#./.##./.#.#
#../#.#/... => .###/.#.#/#.#./..#.
.#./#.#/... => ####/#.../.#../.##.
##./#.#/... => ..##/..#./.#.#/#.#.
#.#/#.#/... => #.##/##../##../#..#
###/#.#/... => .###/.##./.##./.#.#
.../###/... => ##.#/..##/...#/..##
#../###/... => ..##/####/..#./.###
.#./###/... => #.##/#.##/.##./..##
##./###/... => #.../.#.#/####/..##
#.#/###/... => #.../.###/..../.###
###/###/... => .##./####/##../..#.
..#/.../#.. => #..#/.###/.#.#/##.#
#.#/.../#.. => ###./.##./.##./##..
.##/.../#.. => .###/.#../...#/.#.#
###/.../#.. => ###./..##/..##/.#.#
.##/#../#.. => ##.#/...#/####/#.##
###/#../#.. => .#.#/...#/.###/#..#
..#/.#./#.. => #.#./.###/##../#...
#.#/.#./#.. => ####/..#./.###/##..
.##/.#./#.. => #.#./##../..../#.#.
###/.#./#.. => .#.#/#.#./#.../#.#.
.##/##./#.. => ##../.#../...#/..#.
###/##./#.. => ##../#.../.###/..#.
#../..#/#.. => ##../####/##.#/#.##
.#./..#/#.. => #..#/..../..#./#...
##./..#/#.. => ..#./..##/#.##/#.##
#.#/..#/#.. => #.##/..#./.#.#/.#..
.##/..#/#.. => ###./##../.#.#/##..
###/..#/#.. => #.#./.#.#/.#.#/#..#
#../#.#/#.. => #..#/.#.#/####/.#.#
.#./#.#/#.. => #.../#.##/#.../#.#.
##./#.#/#.. => .##./.#../.#.#/..#.
..#/#.#/#.. => ##.#/.###/#..#/#...
#.#/#.#/#.. => .#.#/.###/#..#/.#..
.##/#.#/#.. => ..#./####/.#../...#
###/#.#/#.. => .###/.#../.##./.#.#
#../.##/#.. => ..##/##.#/#.#./.###
.#./.##/#.. => ####/.##./..../.##.
##./.##/#.. => ...#/##../..##/..##
#.#/.##/#.. => .###/##.#/.###/..#.
.##/.##/#.. => ..#./##../..##/...#
###/.##/#.. => ###./.#.#/.###/.###
#../###/#.. => .##./##.#/##.#/..#.
.#./###/#.. => ...#/...#/##.#/#.##
##./###/#.. => .#../.#.#/.#.#/..#.
..#/###/#.. => ####/.#.#/..../##.#
#.#/###/#.. => ..../.###/.##./#.#.
.##/###/#.. => #.#./..##/.##./##..
###/###/#.. => .###/##.#/#.#./#.##
.#./#.#/.#. => ...#/###./..../####
##./#.#/.#. => ..../###./#.##/..##
#.#/#.#/.#. => #.../###./##.#/#...
###/#.#/.#. => #.../##../..#./..#.
.#./###/.#. => ###./..../.#.#/..#.
##./###/.#. => ##.#/..../.##./###.
#.#/###/.#. => #.##/##../...#/....
###/###/.#. => .##./####/##../.#..
#.#/..#/##. => .#.#/#.#./##.#/#.##
###/..#/##. => ####/##../..##/####
.##/#.#/##. => .#.#/#..#/####/##..
###/#.#/##. => #.##/.#../.###/.#..
#.#/.##/##. => ...#/.#.#/#.#./....
###/.##/##. => ..#./#.#./.###/###.
.##/###/##. => .###/.###/.##./.#..
###/###/##. => #.../#.../#.##/.#..
#.#/.../#.# => ..#./..../##../#.##
###/.../#.# => ..#./#.##/####/...#
###/#../#.# => #.../###./#.../...#
#.#/.#./#.# => ..##/#.##/.#.#/.#..
###/.#./#.# => #.../.#.#/#.#./##..
###/##./#.# => ##../.###/.#../...#
#.#/#.#/#.# => ..##/#.#./#.##/##..
###/#.#/#.# => .###/..##/..#./.###
#.#/###/#.# => ##.#/.###/..../.###
###/###/#.# => ##.#/#.##/##../..#.
###/#.#/### => ##../.#../#.#./##.#
###/###/### => .##./##../..#./.###`;

const testInput =  `../.# => ##./#../...
.#./..#/### => #..#/..../..../#..#`;

let pattern = [
  ['.', '#', '.'],
  ['.', '.', '#'],
  ['#', '#', '#']
];

const TESTING = false;

const input = TESTING ? testInput : adventInput;

const squares2 = {},
  squares3 = {};

/*
1x1 grid transformations
  rotate        flipped       
01 20 32 13   10 02 23 31
23 31 10 02   32 13 01 20

2x2 grid transformations
    rotate            flipped
012 630 876 258   210 036 678 852
345 741 543 147   543 147 345 741
678 852 210 036   876 258 012 630 
*/

input.split('\n').forEach(line => {
  const chunks = line.split(" => ");
  const input = chunks[0].split("/").join("");
  const output = chunks[1].split("/").join("");

  const dest = input.length == 4 ? squares2 : squares3;

  let transformed = input;            dest[transformed] = output;
  transformed = rotate(transformed);  dest[transformed] = output;
  transformed = rotate(transformed);  dest[transformed] = output;
  transformed = rotate(transformed);  dest[transformed] = output;
  transformed = flip(transformed);    dest[transformed] = output;
  transformed = rotate(transformed);  dest[transformed] = output;
  transformed = rotate(transformed);  dest[transformed] = output;
  transformed = rotate(transformed);  dest[transformed] = output;
 
});

/*
  2x2
  0123 => 01 => 20 => 2031
          23    31

  3x3
  012345678 => 012 => 630 => 630741852
               345    741
               678    852
*/
function rotate(before) {
  if (before.length == 4) {
    return [
      before[2], before[0],
      before[3], before[1]
    ].join("");
  }
  if (before.length == 9) {
    return [
      before[6], before[3], before[0],
      before[7], before[4], before[1],
      before[8], before[5], before[2]
    ].join("");
  }
  throw "unhandled input length: " + before;
}

/*
  2x2
  0123 => 01 => 10 => 1032
          23    32

  3x3
  012345678 => 012 => 210 => 210543876
               345    543
               678    876
 */
function flip(before) {
  if (before.length == 4) {
    return [
      before[1], before[0],
      before[3], before[2]
    ].join("");
  }
  if (before.length == 9) {
    return [
      before[2], before[1], before[0],
      before[5], before[4], before[3],
      before[8], before[7], before[6]
    ].join("");
  }
  throw "unhandled input length: " + before;
}

function countOn(pattern) {
  let sum = 0;
  pattern.forEach(row => sum += row.filter(c => c === "#").length);
  return sum;
}

//console.log(`iteration 0: \n${pattern.map(row => row.join("")).join("\n")}`);
console.log(`iteration 0: ${countOn(pattern)} bits`);

for (let iteration = 1; iteration <= (TESTING ? 2 : 18); iteration++) {
  const newPattern = [];
  if (pattern[0].length%2 == 0) {
    for (let y = 0; y + 1 < pattern.length; y += 2) {
      newPattern.push([], [], []);
      for (let x = 0; x + 1 < pattern[0].length; x += 2) {
        const input = 
          pattern[y][x] + pattern[y][x+1] + 
          pattern[y+1][x] + pattern[y+1][x+1];

        const output = squares2[input];
        if (!output) {
          console.log(`no output found for this pattern:\n${input.slice(0, 2)}\n${input.slice(2, 4)}`);
        }
        const newY = newPattern.length - 3;
        newPattern[newY].push(output[0], output[1], output[2]);
        newPattern[newY+1].push(output[3], output[4], output[5]);
        newPattern[newY+2].push(output[6], output[7], output[8]);
      }
    }
  } else {
    if (pattern[0].length % 3 != 0) {
      throw "the width of the pattern is " + pattern[0].length + " and is not divisible by 2 nor 3";
    }
    for (let y = 0; y + 2 < pattern.length; y += 3) {
      newPattern.push([], [], [], []);
      for (let x = 0; x + 2 < pattern[0].length; x += 3) {
        const input = 
          pattern[y][x] + pattern[y][x+1] + pattern[y][x+2] + 
          pattern[y+1][x] + pattern[y+1][x+1] + pattern[y+1][x+2] + 
          pattern[y+2][x] + pattern[y+2][x+1] + pattern[y+2][x+2];

        const output = squares3[input];
        const newY = newPattern.length-4;
        newPattern[newY].push(output[0], output[1], output[2], output[3]);
        newPattern[newY+1].push(output[4], output[5], output[6], output[7]);
        newPattern[newY+2].push(output[8], output[9], output[10], output[11]);
        newPattern[newY+3].push(output[12], output[13], output[14], output[15]);
      }
    }
  }
  pattern = newPattern;
  //console.log(`iteration ${iteration}: \n${pattern.map(row => row.join("")).join("\n")}`);
  console.log(`iteration ${iteration}: ${countOn(pattern)} bits`);
}

