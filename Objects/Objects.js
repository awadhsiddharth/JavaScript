// singleton
// Object.create


// Object literals
const mySyn = Symbol("key1")
// object declaration 
const JsUser = {
    name : 'Rahul',
    "fullName" : "Rahul Jacob",
    [mySyn] : "mykey1",
    age : 18,
    location : "Jaipur",
    email : "rahuljacob@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ['Mondays','Wednesday']
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullName"])
// console.log(JsUser[mySyn])
// console.log( typeof JsUser.mySyn)


// JsUser.email = "rahulgjacob@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "rahulgjacob@google.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello JS User : ${this.name}`);
}

JsUser.greetingTwo = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// console.log(JsUser.greeting());