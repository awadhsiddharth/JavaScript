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

const ages = people.map((person)=>{
    console.log(person.age);
});
// console.log(ages);