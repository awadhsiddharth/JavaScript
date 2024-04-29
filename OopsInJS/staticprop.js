class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    
    // createId(){
    //     return Math.floor(Math.random()* 10 + 1)
    // }

    // static keyword wont allow to get others access of the given function

    static createId(){
        return Math.floor(Math.random()* 10 + 1)
    }
}

const user = new User("rahul.jacob")
// console.log(user.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("hariom.gupta","harriom.gupta@gmail.com")
teacher.logMe();

console.log(teacher.createId());
