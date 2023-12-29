
function sayMyName(){

console.log("H");
console.log("i");
console.log("m");
console.log("a");
console.log("n");
console.log("s");
console.log("h");
console.log("i");
}

// sayMyName       // reference, will not print anything
// sayMyName()     // execution

// when taking value at defining function its parameter and while calling it is arguments
// function addTwoNum(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNum(num1,num2){
    // let res =  num1 + num2;
    // console.log("Rahul jacob");
    // return res;

    return num1 + num2;
   
}
const res = addTwoNum(2,3)
// console.log(`Result : `,res);

// function loginUserMessage(userName){
//     if(!userName){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${userName} just logged in`
// }

// // console.log(loginUserMessage("Rahul"))
// // console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function loginUserMessage(userName = "Sam"){
    if(!userName){
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Rahul"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage("Sam Johnson"))