// Array 
const myArr = [0,1,2,3,4,5]
const myArray = [0,1,2,3,4,5,true, "Rahul"]

const myHeroes = ["shaktiman","nagraj"]

const myArr1 = new Array(0,1,33,46,66)

// console.log(myArr[2]);

//Arrays method
// myArr.push(8)
// myArr.push(48)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift();
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(19))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ", myArr);

const myNewArr = myArr.slice(1,3)

console.log(myNewArr);
console.log("B ", myArr);

const myNewArray = myArr.splice(1,3)
console.log(" ", myArr);
console.log(myNewArray);

