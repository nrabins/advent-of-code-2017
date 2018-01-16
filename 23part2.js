
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num !== 1;
}

let b = 106500
let c = 123500

let h = 0;
for (let b = 106500; b < 123501; b += 17) {
  if (!isPrime(b)) {
    h++;
  }
}

console.log(h);