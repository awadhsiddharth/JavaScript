// Stack(Primitive), Heap Memory(NP)

let myYoutubeName = "Coder"

let anotherName = myYoutubeName
anotherName = "Coding"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email : "user@gmail.com",
    upi : "user1@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

