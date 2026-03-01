let c = 300

if (true) {
    let a = 10
    const b = 20
    let c = 30
    // console.log(c);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Dipak"
    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
// one()

if (true) {
    const username = "Dipak"
    if (username==="Dipak") {
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ==========================================================================

console.log(addOne(5));
function addOne(num) {
    return num+1
}

// addTwo(5)
const addTwo = function (num) {
    return num+2
}