const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, currVal) =>{
//     console.log(`Value of acc : ${acc} and that of currVal : ${currVal}`);    
//     return acc + currVal;
// },0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc,item) => {
   return acc + item.price
},0)
console.log(totalPrice);
