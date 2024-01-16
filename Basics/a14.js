// let marks_class_12 = [41, 52, 83, 94, "Not Present"];
// marks_class_12[5] = 88;
// console.log(marks_class_12);
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);
// console.log("The length of the array is ", marks_class_12.length);
// marks_class_12[0] = 99;
// console.log(marks_class_12);
// console.log(typeof marks_class_12);

// //Array methods
// let num = [1, 2, 3, 34, 4];
// let b = num.toString(); // b is now a string
// console.log(b);
// console.log(num);
// let c = num.join("_");
// console.log(c, typeof c);
// let r = num.pop(); // pop returns the popped(ie last element) element
// console.log(num, r);
// let num1 = num.push(7);
// console.log(num);
// // shift removes an element from starts from an array
// let r1 = num.shift();
// console.log(num);
// // unshift adds an element at starting position to an array
// let r2 = num.unshift(88);
// console.log(num);

// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let number = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let number_more = [211, 2012, 913, 514, 195, 106, 17, 168, 190];

// // delete numb[0];
// // console.log(numb);
// // console.log(numb.length);
// let newArray = numb.concat(number, number_more);
// console.log(newArray);
// console.log(numb);
// console.log(number);
// let compare = (a,b)=>{
//   return a-b;
// }
// let num = [76, 1, 242, 776, 5, 2, 9, 10];
// //sort according to alphabetical order that means it first prints numbers starting from 1 and 2 and so on.
// num.sort(compare);
// console.log(num);
// num.reverse();

//Splice and slice
let num = [76, 1, 242, 776, 5, 2, 9, 10];
//splice
// num.splice(2,3,31,12,121);
// console.log(num);

//slice
let newArray = num.slice(3, 6);
console.log(newArray, num);
