const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);
// console.log(marvelHeroes[3][1]);

// For merging 2 array, use concat or ... in array
const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realArray = anotherArray.flat(Infinity);
// console.log(realArray)


// console.log(Array.isArray("Rahul"))
// console.log(Array.from({name:"Rahul"}))     // useful

// converting variable into array by using Array.of method

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
