// var c = 300
let a = 300
if(true){
    let a = 10;
    const b = 20;
    // c = 30
    console.log(`Inner value is : ` +a);
}
// global scope is different in code environment and in browser
let array = [12,23,34,45,56]
for(let i = 0;i < array.length; i++){
    const element = array[i]
}


console.log(a);
// console.log(b);
// console.log(c);