// fetch('https://google.com').then().catch().finally()
// promise is an object noting eventual completion and and an instance can be created by new keyword 

// Promise creation
// const promiseOne = new Promise(function (resolve, reject){
//     // Do an asyn task
//     // DB calls,crypography, n/w  call

//     setTimeout(function (){
//         console.log('Asyn task is completed');
//         resolve()
//     },1000)
// })

// // then takes a callback function
// // resolve is directly connected to then
// promiseOne.then( function (){
//     console.log("Promise consumed");
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Asyn task 2");
//         resolve()
//     },1000)
// }).then( ()=>{
//     console.log("Asyn 2 consumed");
// })


// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve takes data,object, array as parameter
//         resolve({username:"rahul.jacob", email: "rahul.jacob@google.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
// })


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error ){
//             resolve({username:"shreya.singh", password:"123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },2000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected" );
// })


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"vivek.singh", password:"1234"})
        }else{
            reject('ERROR: Username or Password mismatch')
        }
    },1000)
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // convertig string into json
//     // console.log(response);
//     // const data = response.json()
//     // response.json will take take TimeRanges, so make it await 
//     const data = await response.json()
//     console.log(data);
//    } catch (err) {
//     console.log("ERROR: ",err);
//    }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/awadhsiddharth')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



