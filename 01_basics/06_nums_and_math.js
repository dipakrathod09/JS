const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));


// =======================================================================================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,7,8,9,1011));
console.log(Math.max(4,5,6,7,8,9,1011));


n = Math.random()
console.log(n);
console.log((n*10)+1);

const min = 4
const max = 5
num = Math.random()
f = max-min+1
console.log(num);
console.log(f);
console.log((num*f));
console.log((num*f)+min);
console.log(Math.floor((num*f)+min));