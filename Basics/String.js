const name = "Rahul"
const repoCount = 13

// console.log(name + repoCount + " Value");
// Modern way of concatination
// console.log(`Hello my name is ${name} and my repos count is ${repoCount}`);


const gameName = new String('Himanshi-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("H"));

// //slice-substring
const newString = gameName.substring(-8,4);
// console.log(newString);
// // slice accepts negative value as and it starts from reverse side
// const anotherString = gameName.slice(-10,3);
// console.log(anotherString);


// // Trim removes the extra spaces present 
// const newStringOne = "    rahul   "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://rahul.com/rahul%20jacob"

console.log(url.replace("%20","-"))
let newUrl = url.replace("%20",'-')
console.log(url);
console.log(newUrl);

console.log(url.includes('vivel'))

console.log(gameName.split('-'));
