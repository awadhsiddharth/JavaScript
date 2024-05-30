let arr = [45, 23, 21];
// Array map method
let a = arr.map((value, index, array) => {
  //console.log(value, index, array);
  return value;
}); 
//console.log(arr);
//console.log(a);


// Array filter method
let arr1 = [45, 23, 21, 0, 3, 5];
let a1 = arr1.filter((value1) => {
  return value1 < 5;
});
//console.log(a1,arr1);

// Array reduce method
let arr2 = [1, 2, 3, 5, 2, 1];
function reduce_function(h1, h2) {
  return h1 + h2;
}
let ar = arr2.reduce(reduce_function);
// let ar = arr2.reduce((h1, h2) => {
//   return h1 + h2;
// });
console.log(ar);
