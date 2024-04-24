
// function sayMyName(){

// console.log("H");
// console.log("i");
// console.log("m");
// console.log("a");
// console.log("n");
// console.log("s");
// console.log("h");
// console.log("i");
// }

// // sayMyName       // reference, will not print anything
// // sayMyName()     // execution

// // when taking value at defining function its parameter and while calling it is arguments
// // function addTwoNum(num1,num2){
// //     console.log(num1 + num2);
// // }

// function addTwoNum(num1,num2){
//     // let res =  num1 + num2;
//     // console.log("Rahul jacob");
//     // return res;

//     return num1 + num2;
   
// }
// const res = addTwoNum(2,3)
// // console.log(`Result : `,res);

// // function loginUserMessage(userName){
// //     if(!userName){
// //         console.log("Please enter a username");
// //         return 
// //     }
// //     return `${userName} just logged in`
// // }

// // // console.log(loginUserMessage("Rahul"))
// // // console.log(loginUserMessage(""))
// // console.log(loginUserMessage())

// function loginUserMessage(userName = "Sam"){
//     if(!userName){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${userName} just logged in`
// }

// // console.log(loginUserMessage("Rahul"))
// // console.log(loginUserMessage(""))
// console.log(loginUserMessage("Sam Johnson"))

//if you wanted to print multiple items use rest operator(...)
// function calculateCartPrice(num1){
//     return num1;
// }
// function calculateCartPrice(...num1){
//     return num1;
// }

// function calculateCartSum(val1,val2, ...num1){
//     return num1;

// }
// console.log(calculateCartSum(67867,86987,5675,67567));
// console.log(calculateCartPrice(200,788,988,2000))

// const user={
//     username: "Rahul",
//     prices:199
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username:"Sam",
//     price:299
// })

const myNewArray = [444,200,220,100]

function returnSeconValue(getArray){
    return getArray[1]
}

// console.log(returnSeconValue(myNewArray));
console.log(returnSeconValue([87687,6567,233,5678]));
