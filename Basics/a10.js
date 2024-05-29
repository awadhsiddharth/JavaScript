function onePlusAvg(x, y) {
    console.log("Done");
    //return Math.round(1 + (x+y)/2);
    return 1 + (x + y) / 2;
  }
 
  //Arrow Function
  const sum = (p, q) => {
    return p + q;
  };
  
  const hello = () => {
    console.log("hello how are you?");
    return "hi";
  };
  
  let a = 1,
    b = 2,
    c = 3;
  
  console.log("One plus Average of a and b is: ", onePlusAvg(a, b));
  console.log("One plus Average of b and c is: ", onePlusAvg(b, c));
  console.log("One plus Average of a and c is: ", onePlusAvg(a, c));
  console.log(sum(6, 99));
  let s = hello();
  console.log(s);
  
