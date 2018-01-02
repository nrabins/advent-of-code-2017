fs = require('fs');

const testCases = [
    `{}`,
    `{{{}}}`,
    `{{},{}}`,
    `{{{},{},{{}}}}`,
    `{<a>,<a>,<a>,<a>}`,
    `{{<ab>},{<ab>},{<ab>},{<ab>}}`,
    `{{<!!>},{<!!>},{<!!>},{<!!>}}`,
    `{{<a!>},{<a!>},{<a!>},{<ab>}}`,
    `<>`,
    `<random characters>`,
    `<<<<>`,
    `<{!>}>`,
    `<!!>`,
    `<!!!>>`,
    `<{o"i!a,<{i<a>`
];

const STATE = {
    NORMAL: 0,
    GARBAGE: 1,
    IGNORE: 2
}
let state = STATE.NORMAL;

function calculateGroupSum(data) {
    const sums = {
        group: 0,
        garbage: 0
    }
    let depth = 0;
    for (let i = 0; i < data.length; i++) {
        const c = data[i];
        switch (state) {
            case STATE.NORMAL:
                if (c == '{') {
                    depth++;
                } else if (c == '}') {
                    sums.group += depth;
                    depth--;
                } else if (c == '<') {
                    state = STATE.GARBAGE;
                }
                break;
            case STATE.GARBAGE:
                if (c == '>') {
                    state = STATE.NORMAL;
                } else if (c == '!') {
                    state = STATE.IGNORE;
                } else {
                    sums.garbage++;
                }
                break;
            case STATE.IGNORE:
                state = STATE.GARBAGE;
                break;
        }
    }
    return sums;
}

testCases.forEach(testCase => {
    const sums = calculateGroupSum(testCase);
    console.log(testCase + " -- " + sums.group + " -- " + sums.garbage);
});

fs.readFile('9input.txt', 'utf8', (err, data) => {
    console.log(calculateGroupSum(data));
});