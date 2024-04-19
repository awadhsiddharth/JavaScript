// Control flow or logic flow


// if
// if(condition){
 
// }
// if(false){

// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
    
// }
/* 
Conditional 
<,>,<=,>=,!=,=,==,===,!==
*/

// if(2 == "2"){
//     console.log("executed");
// }

// if(2 === "2"){
//     console.log("executed");
// }

// if(2!="1"){
//     console.log("Exceuted");
// }

// const temp = 41
// if (temp === 40) {
//     console.log("Temperature is less than 50");
// }else{
// console.log("Temperature is greater than 50");
// }

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

// const balance = 1000
// if (balance > 500) console.log("test"),console.log("tesst2");

// const balance = 1000
// if (balance < 500) {
//     console.log("Less than 500");
// }
// else if (balance < 750) {
//     console.log("Less than 750");
// }
// else if (balance < 900) {
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }



const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User can log in into website");
}
