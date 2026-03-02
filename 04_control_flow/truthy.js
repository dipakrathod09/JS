// const userEmail = []

// if (userEmail) {
//     console.log("Got User Email");   
// } else {
//     console.log("Dont Have user Email");
// }

// falsy Value : flase, 0, -0, BigInt --> 0n, "", null, undefined, NaN

// truthy Value : "0",'false'," ",[],function(){},

// if (userEmail.length === 0) {
//     console.log("Arrayb is Empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }

// Nullish Coaleascing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ??20

console.log(val1);

// Terniary Operator

// Condition ? true : False

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less thn 80") : console.log("Greater Then 80");
