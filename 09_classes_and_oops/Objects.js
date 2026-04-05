function multipleBy5(num) {
    this.num = num;
    return num*5
}
multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,price) {
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function() {
    this.price++
}

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.price}`)
}

const chai = new createUser('Chai',25)
const tea = new createUser('tea',250)

chai.printMe();

