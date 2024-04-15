let num = [3, 54, 1, 2, 4];
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }
// for each loop
// num.forEach((element) => {
//   console.log(element * element);
// });

// Array.from
let name = "harry";
let arr = Array.from(name);
console.log(arr);


// for .of loop
for (let i of num) {
  console.log(i);
}

//for ..in loop
for (let item in num) {
  console.log(num[item]);
  console.log(item);
}
