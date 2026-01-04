const name = "Dipak"
const repoCount = 50
console.log(name+ repoCount+" Value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Dipak Rathod")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,5)
console.log(newString);
const anotherString = gameName.slice(-12,-7)
console.log(anotherString);


const newStringOne = " Dipak "
console.log(newStringOne);
console.log(newStringOne.trim())


const url = "Dipak Rathod"
console.log(url.replace(" ","-"));

const Array = url.trim().split()
console.log(Array);

