// Object Literal

const user = {
    userName : "rahul.jacob",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got User details from DB");
        // console.log(`Username : ${this.userName}`);
        // console.log(this);
    }
}

// console.log(user.loginCount);
// console.log(user.signedIn);
// console.log(user.userName);

// console.log(user);
// console.log(user.getUserDetails());

// console.log(this);

// Constructor function- The new keyword is actually a constructor function

// const promiseOne = new Promise
// const date = new Date()

function User(userName, logInCount, isLoggedIn){
    this.userName = userName
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn


    this.greetings = function(){
        console.log(`Welocme ${this.userName}`);
    }
    // this is optional
    // return this
}

// const userOne = User("rahul.jacob",12,true)
// const UserTwo = User("shreya",11,false)


// constructor function gives us a new instance each time
const userOne = new User("rahul.jacob",12,true)
const UserTwo = new User("shreya",11,false)

// new keyword creates an empty object
// constructor function is called using new keyword
// this userTwo will override userOne even if we don't print userTwo explicitly
// but if we add new keyword then it will not override 
console.log(userOne.constructor);
// console.log(UserTwo);
