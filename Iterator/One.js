// for (let ii = 0; ii <= 10; ii++) {
//     const element = ii;
//     if(element ==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// // console.log(element);

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop values: ${i}`);
//      for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop values: ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' +i*j);
//      }
// }

// let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// Keywords
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`); 
// }


for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}

