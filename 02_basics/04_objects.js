

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "Dipak@gmail.com",
    fullName : {
        userFullName : {
            fistName : 'DIPAK',
            lastName : 'Rathod'
        }
    }
}

// console.log(regularUser.fullName.userFullName.fistName);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
 
// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj4 = {...obj1,...obj2}
// console.log(obj4);

const users = [
    {
        id : 1,
        email : "dipak@gmail.com",

    },
    {
        id : 1,
        email : "dipak@gmail.com",
        
    },
    {
        id : 1,
        email : "dipak@gmail.com",
        
    },
    {
        id : 1,
        email : "dipak@gmail.com",
        
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    name : "Js In Hindi",
    price : "999",
    courseInstructor : "Hitesh"   
}

// course.courseInstructor

const {courseInstructor : Instructor} = course
console.log(Instructor);

const navbar = () => {

}

navbar(company = "Dipak")