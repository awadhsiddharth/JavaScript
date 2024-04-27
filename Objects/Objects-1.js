// singleton object or constructor declaration
// const tinderUser = new Object()  // singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "rahulgjacob@gmail.com",
    fullName :{
        userFullName :{
            firstName : "Rahul",
            lastName : "Jacob"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = {
    5 : "a",
    6 : "b"
}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj4 = Object.assign(obj1,obj2,obj3)
// const obj5 = Object.assign({},obj1,obj2,obj3)

// using modern spread method using ... 
const obj4 = {...obj1,...obj2,...obj3}

console.log(obj4);
// console.log(obj5);

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: 'h@gmail.com'
    },
    {
        id:1,
        email: 'h@gmail.com'
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
