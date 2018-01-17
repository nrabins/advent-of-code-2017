const TESTING = false;
const adventInput = `50/41
19/43
17/50
32/32
22/44
9/39
49/49
50/39
49/10
37/28
33/44
14/14
14/40
8/40
10/25
38/26
23/6
4/16
49/25
6/39
0/50
19/36
37/37
42/26
17/0
24/4
0/36
6/9
41/3
13/3
49/21
19/34
16/46
22/33
11/6
22/26
16/40
27/21
31/46
13/2
24/7
37/45
49/2
32/11
3/10
32/49
36/21
47/47
43/43
27/19
14/22
13/43
29/0
33/36
2/6`

const testInput = `0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`;

const input = TESTING ? testInput : adventInput;

class Component {
  constructor(line) {
    this.str = line;

    const chunks = line.split("/");
    const a = parseInt(chunks[0]);
    const b = parseInt(chunks[1]);
    this.links = [
      [a, b],
      [b, a]
    ]

    this.weight = a + b;
  }
}

function logPath(path) {
    console.log(path.map(c => `${c.links[0][0]}/${c.links[0][1]}`).join("--"));
}

const components = input.split('\n').map(line => new Component(line));

const logged = {};

let strongestPath = {
  weight: 0,
  path: []
}

let longestPath = {
  weight: 0,
  path: []
}

function addPossiblePaths(pathSoFar, openEnd, availableComponents, allPaths) {

  if (pathSoFar.length == 1 && !logged.hasOwnProperty(pathSoFar[0].str)) {
    console.log(`iterating starting node ${pathSoFar[0].str}`);
    logged[pathSoFar[0].str] = true;
  }

  // check all possible continuations
  let hasContinuation = false;
  for (let i = 0; i < availableComponents.length; i++) {
    const next = availableComponents[i];
    if (next.links[0][0] == openEnd || next.links[1][0] == openEnd) {
      hasContinuation = true;

      // remove the next component from consideration
      const newAvailableComponents = availableComponents.slice(0)
        .filter(c => c.links[0] != next.links[0] || c.links[1] != next.links[1]);

      const nextLink = next.links.filter(l => l[0] === openEnd)[0];
      const newOpenEnd = nextLink[1];
      const newPathSoFar = pathSoFar.slice(0);
      newPathSoFar.push(next);
      addPossiblePaths(newPathSoFar, newOpenEnd, newAvailableComponents, allPaths);
    }
  }

  // if there are no continuations, add this path
  if (!hasContinuation) {
    allPaths.push(pathSoFar.slice());

    let weight = 0;
    pathSoFar.forEach(component => {
      weight += component.weight;
    });
    if (weight > strongestPath.weight) {
      strongestPath = {
        weight: weight,
        path: pathSoFar
      }
      console.log(`new strongest: ${weight}`);
    }
    if (pathSoFar.length > longestPath.path.length || (pathSoFar.length == longestPath.path.length && weight > longestPath.weight)) {
      longestPath = {
        weight: weight,
        path: pathSoFar
      }
      console.log(`new longest: ${pathSoFar.length} (${weight})`);
    }
  }
}

const allPaths = [];
addPossiblePaths([], 0, components, allPaths)

console.log('done!')

// console.log(`strongest path:\n ${strongestPath}`);
// console.log(`longest path:\n ${longestPath}`);