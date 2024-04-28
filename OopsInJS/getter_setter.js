class User {
    constructor(email,password){
        this.email  = email
        this.password = password
    }

    
    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const user = new User("hitesh@ai.com","abc")
console.log(user.password);
console.log(user.email);
