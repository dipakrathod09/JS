// function sayMyName() {
//     console.log("D");
//     console.log("i");
//     console.log("p");
//     console.log("a");
//     console.log("k");
// }

// sayMyName()

// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1,number2) {
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3,5)
// console.log("Result :",result);

// function loginUserMessage(username = "GOD") {
//     if(!username) {
//         console.log("Please Enter a Username");
//         return
//     }
//     return `${username} Just Logged In`
// }
// console.log(loginUserMessage("Dipak"))
// console.log(loginUserMessage())

function CalculateCartPrice(val1,val2,...num1) {
    return num1
}
// console.log(CalculateCartPrice(200,400,500));

const user = {
    username : "Dipak",
    price : 499
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)
}
// handleObject(user);

handleObject({
    username : "TONY",
    price : 100000
})

const myNewArray = [200,400,100,600]

function returnSeconfValue(getArray) {
    return getArray[1]
}
// console.log(returnSeconfValue(myNewArray));
console.log(returnSeconfValue([2000,4000,5000,600]));