const user = {
    username : "Dipak",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username} , Welcome to Website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "Dipak"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Dipak"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Dipak"
    console.log(this);
}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,5));

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username : "Dipak"})

console.log(addTwo(3,5));

const myArray = [2,5,6,7,8,9]
myArray.forEach()