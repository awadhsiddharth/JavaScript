function setUserName(userName){
    // complex DB calls
    this.userName = userName
    console.log("Called");
}

function createUser(userName,email,password){
    
    // setUserName(userName) // not being called,it has only refernce but not called
    setUserName.call(this, userName)

    this.email = email
    this.password = password
}

const userOne = new createUser("rahul","rahul@techmahindra.com","123")
console.log(userOne)
