let names = ["Ali", "Saroj", "Janak"];
names.forEach(i => { console.log("Name : "+i)})

let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Saroj" },
  { id: 3, name: "Janki" }
];
let user = users.find(u=>u.id===2);
console.log(user);