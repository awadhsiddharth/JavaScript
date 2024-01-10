// Object related thing
// Can we change the value of pi to either or 4
// if we cant change, why we cant change the value of Math.PI


// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// const myNewObj = Object.create(null)
const chai = {
    name : "ginger chai",
    price : 150,
    isAvailable : true,

    orderChai: function(){
        console.log("Chai not prepared yet");
    }
}

// console.log(chai);

const desc = Object.getOwnPropertyDescriptor(chai, "price")
console.log(desc);
Object.defineProperty(chai, "price", {
    // writable: true,
    enumerable: false,
    // configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "price"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }
   
}



