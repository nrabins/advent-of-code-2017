const TESTING = false;

const filePath = TESTING ? '19testinput.txt' : '19input.txt';

const DIRECTION = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
};

function toDirectionString(direction) {
  switch(direction) {
    case DIRECTION.UP: return 'UP';
    case DIRECTION.DOWN: return 'DOWN';
    case DIRECTION.LEFT: return 'LEFT';
    case DIRECTION.RIGHT: return 'RIGHT';
    default: throw `unrecognized direction ${direction}`
  }
}

function isPath(rows, x, y) {
  const c = rows[y][x];
  if (y < 0 || y >= rows.length || x < 0 || x >= rows[y].length) {
    return false;
  }
  return c != ' ';
}

fs = require('fs');

fs.readFile(filePath, 'utf8', (err, data) => {
  act(data);
});

function act(data) {
  const rows = [];
  const lines = data.split('\n');
  lines.forEach(line => {
    rows.push(line.split(''));
  });

  let x = rows[0].findIndex(c => c == '|'),
    y = 0;

  let direction = DIRECTION.DOWN;

  const accumulated = [];
  
  let steps = 0;

  // assuming that all the rows are the same length
  while (x >= 0 && x < rows[0].length && y >= 0 && y < rows.length) {
    steps++;
    const c = rows[y][x];
    
    if (c == ' ') {
      console.log(`end of road found at (${x}, ${y}), direction = ${toDirectionString(direction)}`);
      console.log(`accumulated letters = ${accumulated.join('')}`);
      console.log(`steps taken = ${steps - 1}`);
      break;
    } else if  (c == '-' || c == '|') {
      // continue along current direction (do nothing)
    } else if (c == '+') {
      // a turn, figure out which way we turn
      if (direction == DIRECTION.UP || direction == DIRECTION.DOWN) {
        if (isPath(rows, x-1, y)) {
          direction = DIRECTION.LEFT;
        } else if (isPath(rows, x+1, y)) {
          direction = DIRECTION.RIGHT;
        } else {
          throw `reached a weird state turning at (${x},${y}), direction = ${toDirectionString(direction)}`;
        }
      } else {
        if (isPath(rows, x, y-1)) {
          direction = DIRECTION.UP;
        } else if (isPath(rows, x, y+1)) {
          direction = DIRECTION.DOWN;
        } else {
          throw `reached a weird state turning at (${x},${y}), direction = ${toDirectionString(direction)}`;
        }
      }
    } else {
      accumulated.push(c);
    }
    
    switch (direction) {
      case DIRECTION.UP: y--; break;
      case DIRECTION.DOWN: y++; break;
      case DIRECTION.LEFT: x--; break;
      case DIRECTION.RIGHT: x++; break;
    }
  }
}
