function user(email, password){
    this._email = email
    this._password = password

    // getter and setter
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password = value
        }
    })

}

const usr = new user("chitrarth@ai.com","cn123")
console.log(usr.email);
console.log(usr.password);