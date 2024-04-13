const accountId = 144553  // cant be changed
let accountEMail = "abc@gmail.com"   //
var accountPass = "12455"
accountCity = "Jaipur"  // dont prefer this type of variable decl

let accountState

//accountId = 2 // not allowed with const keyword
accountEMail = "abcsd@gmail.com"
accountPass = "12345"
accountCity = "New Delhi"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEMail,accountPass,accountCity,accountState])
