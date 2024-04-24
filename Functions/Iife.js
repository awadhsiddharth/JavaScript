// Immediately Invoked Function Expression (IIFE) 

// to avoid problem caused by scope of global variable-- use iife

(function chai(){
    console.log(`DB-1 CONNECTED`);
})();

// if u wanted to use 2 consecutive iife use semicolon to separate the iife,
// in this particular case javascipt dont use semicolon implicitly so we have use it

// Unnamed iifw
( (name)=>{
    console.log(`DB-2 CONNECTED BY : ${name}`);
})('Rahul');

// Named iife
( function db(name){
    console.log(`DB-3 CONNECTED BY : ${name}`);
})('Simmy')

