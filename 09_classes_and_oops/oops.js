const user = {
    username : 'Dipak',
    loginCount:8,
    signedIn:true,
    getUserDetails : function () {
        console.log('Got user Detail');
        // console.log(`Username : ${this.username}`)
        console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome : ${this.username}`);
    }
    return this;
}

const userOne = new User('Dipak',10,true);
const userTwo = new User('Mittal',12,false);
console.log(userOne.constructor);
// console.log(userTwo);

