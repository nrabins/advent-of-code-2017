function addNodeAndAllChildren(searchIndex, members, links) {
    members[searchIndex] = true;
    // console.log(Object.getOwnPropertyNames(members).length);
    const children = links[searchIndex];
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (!members.hasOwnProperty(child)) {
            addNodeAndAllChildren(child, members, links);
        }
    }
}

function groupify(linkStrs, searchIndex) {
    const links = {};
    for (let i = 0; i < linkStrs.length; i++) {
        const linkStr = linkStrs[i];
        const sides = linkStr.split(" <-> ");
        links[sides[0]] = sides[1].split(", ");
    }

    const members = {};

    addNodeAndAllChildren(searchIndex, members, links);
    
    return members;
}

// fs.readFile('12input.txt', 'utf8', (err, data) => {
//     const groups = [];
//     const links = data.split("\r\n");
//     groupify(links);
// });

function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);

    var lines = [];
     
    rl.on('line', function (line) {
        lines.push(line);
    });
    
    rl.on('close', function (line) {
        // part 2 stuff
        const found = [];
        let groupCount = 0;
        for (let i = 0; i < lines.length; i++) {
            const key = "" + i;
            console.log('testing ' + key);
            if (found.findIndex(testKey => key === testKey) == -1) {
                const members = groupify(lines, key);
                Object.getOwnPropertyNames(members).forEach(val => {
                    found.push(val);
                });
                groupCount++;
                console.log("group count: " + groupCount);
            }
        }
        //console.log("final size is " + Object.getOwnPropertyNames(members).length);
        console.log("final group count: " + groupCount);
    });
}
processFile('12input.txt');

const testInput = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`;

const data = testInput.split('\n');
// const members = groupify(data, "0");
// console.log(members);
