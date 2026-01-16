// Singleton

// Object Literals
// Object.create

const mySymbol = Symbol("Key1")
const JsUser = {
    name : "Dipak",
    "full Name" : "Dipak Rathod",
    [mySymbol] : "myKey1",
    Age : 19,
    location : "Ahmedabad",
    email : "dipak@gmal.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],
}

console.log(JsUser.name);
console.log(JsUser["full Name"]);
console.log(typeof JsUser[mySymbol]);
console.log(JsUser["email"]);

JsUser.email = "dipakrathod@gmail.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greeting2 = function() {
    console.log(`Hello JS User , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
