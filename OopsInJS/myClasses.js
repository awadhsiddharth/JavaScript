// ES6(EcmaScript-6)

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user = new User("rahul.jacob","rahul.jacob@techmahindra.com","768689")

// console.log(user.encryptPassword());
// console.log(user.changeUserName());

// behind the scene

function  User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
   
const user1 = new User("vivek.kumar","vivek.kumar@zs.com","fwyfyhh")
console.log(user1.encryptPassword());
