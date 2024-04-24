// // var c = 300
// let a = 300
// if(true){
//     let a = 10;
//     const b = 20;
//     // c = 30
//     console.log(`Inner value is : ` +a);
// }
// // global scope is different in code environment and in browser
// let array = [12,23,34,45,56]
// for(let i = 0;i < array.length; i++){
//     const element = array[i]
// }


// console.log(a);
// // console.log(b);
// // console.log(c);


function one(){
    const username = "Rahul"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()
if (true) {
    const username = "Rahul"

    if (username === "Rahul") {
        const website = " youtube"
        // console.log(username + website); 
    }
    // console.log(website);
   
}
// console.log(username);

// *************  interesting  *********************
console.log(addOne(6))
function addOne(num) {
    return num +1 
}
// console.log(addOne(5));
// addOne(6)

// expression

addTwo(5) // this will produce error as it called before accessing before=Hoisting
const addTwo = function (num) {
    return num + 2;
}

// addTwo(5)
