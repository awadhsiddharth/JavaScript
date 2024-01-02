const user = {
    username : "Rahul",
    price : 999,

    welcomeMessage : function(){
        // this refer current context
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "Simmy"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Simmy"
//     // we cant use this inside function, it can be used in object only
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let usn = "Simmy"
//     console.log(this.usn);
// }

// chai()

// ********** Arrow Function **********

const chai = () => {
    let usn = "Simmy"
    console.log(this);
}

// chai()
// explicit return
// const addTwo = (num1, num2) =>{
//     return num1+ num2
// }

//implicit return
// const addTwo = (num1, num2) =>   num1+ num2

// const addTwo = (num1, num2) =>   (num1+ num2)

// const addTwo = (num1, num2) =>   ({username:"Simmy"})

// console.log(addTwo(1,2));

// const myArr = [1,2,3,4,5]

// myArr.forEach(()=>{

// })