// let myName = 'Dipak    '
// let myFavDrink = 'Chai     '
// console.log(myName.trim().length);

let myHeros = ['thor','SpiderMan'];
let heroPower = {
    thor:'Hammer',
    SpiderMan:'sling',
    getSpiderPower : function () {
    console.log(`Spidy Power is ${this.SpiderMan}`)
    }
}

Object.prototype.Dipak = function () {
    console.log(`Dipak is Present in All Objects`);
}


Array.prototype.heyDipak = function() {
    console.log('Dipak Says Hello');
}

// heroPower.Dipak()

// myHeros.Dipak()
// myHeros.heyDipak()
// heroPower.heyDipak()

// inheritance 

const User = {
    name : 'Chai',
    email : 'Chai@google.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupports = {
    makeAssigment : 'JS Assigment',
    fullTime : true,
    __proto__ : TeachingSupport
} 

Teacher.__proto__ = User

// morden syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = 'ChaiAurCode   '
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUserName.trueLength()

'Dipak'.trueLength()
'Rathod'.trueLength()