const User = {
    _email : 'eshita.sharma@idp.com',
    _password : 'abc@123',


    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password
    },

    set password(value){
        this._password = value
    },
    
    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    }

}


const user = Object.create(User)
console.log(user.email);
console.log(user.password);