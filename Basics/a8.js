// 7 Primitive and 1 Non-Primitive data types
// Primitive == nn bb ss u 
let a = null;
let b = 222;
let c = true;
let d = BigInt("889") + BigInt("88");
let e = "Amit";
let f = Symbol("symbol here");
let g = undefined
let h;
console.log(a,b,c,d,e,f,g,h);
console.log(typeof d);

//Non primitives- Onjects in JS
const item ={
  "Amit":true,
  "Shubh":false,
  "Rahul":56,
  "Ramu":undefined
}

console.log(item["Amit"]);
