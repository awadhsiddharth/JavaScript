// Dates 
// let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
 
// console.log(typeof date);

// let myCreatedDate = new Date(2023,11,29);
// let myCreatedDatee = new Date(2023,11,29,5,3);
// let myCreatedDateee = new Date("2023-11-29");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDatee.toLocaleString());
// console.log(myCreatedDateee.toLocaleString());

//timestamp
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday : "long",
  
})


