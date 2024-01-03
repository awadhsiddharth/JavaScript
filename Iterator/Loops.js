const coding = ["js","ruby","java","python","cpp"]


//call back function dont have name
// coding.forEach( function (values) {
//     console.log(items);
// })

// coding.forEach( (value)=>{
//     console.log(value);
// })

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe)

// coding.forEach((value,index,arr)=>{
//         console.log(value,index,arr);
// })


const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((items)=>{
        console.log(items.languageName);
        console.log(items.languageFileName);

})



