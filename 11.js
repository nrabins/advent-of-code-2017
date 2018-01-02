fs = require('fs');


fs.readFile('11input.txt', 'utf8', (err, data) => {
    const steps = data.split(",");
    console.log(findDistance(steps));
});


function findDistance(steps) {
    let x=0, y=0, z=0;
    let maxDistance = 0;

    function getDistance() {
        return Math.max(...([x, y, z].map(num => Math.abs(num))))
    }

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        switch (step) {
            case "n": y++; z--; break;
            case "ne": x++; z--; break;
            case "se": x++; y--; break;
            case "s": y--; z++; break;
            case "sw": x--; z++; break;
            case "nw": x--; y++; break;
            default: {
                debugger;
                console.log('unrecognized direction'); 
                return;
            }
        }
        const distance = getDistance();
        maxDistance = Math.max(maxDistance, distance);
    };

    return {
        currentDistance: getDistance(),
        maxDistance: maxDistance
    };
}