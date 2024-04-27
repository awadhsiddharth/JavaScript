// Map Method
// iterate over object and get age

const people = [
    {
        name: 'bob',
        age: 20,
        postion: 'developer'
    },
    {
        name: 'anna',
        age: 25,
        postion: 'devsigner'
    },
    {
        name: 'susy',
        age: 30,
        postion: 'the boss'
    }
];

const getAges = (person) => person.age * 2;
console.log(getAges);

const ages = people.map((person) => {
    console.log(person.age);
});
// console.log(ages);


const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 50
    };
});

console.log(newPeople);

const name = people.map((person) => `<h1>${person.name}</h1>`);

const result = document.querySelector('#result')

result.innerHTML = names.join('');

