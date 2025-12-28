const accountId = 14553
let accountEmail = "dipakrathod@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState

// accountId = 2 Not Allowed

/* 
 Prefer not to use var
 because of issue in block scope and Functional Scope
*/

accountEmail = "dipak@gmail.com"
accountPassword = "2006"
accountCity = "Mumbai"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])