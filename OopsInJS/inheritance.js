// inheritance

class User {
    constructor(name,username){
        this.name = name
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(name, username, email,password){
        super(name ,username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.name}`);
    }
}

const teacher = new Teacher("Arshad Husain","arshad.husain","arshad.husain@dituniversity.com","13456")
teacher.addCourse()
teacher.logMe()

const user = new User("Garima Verma","garima.verma")
// user.addCourse()
user.logMe()


console.log(teacher === user);
console.log(teacher === Teacher);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
