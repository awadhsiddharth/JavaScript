// let myName = "Siddharth   "
// let myChannel = "daru   "

// console.log(myName.trueLength);
// console.log(myName.trim().length);

let myHeroes = ["Thor","Spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function (){
    // console.log(`hitesh is present in all object`);
}

Array.prototype.heySid = function(){
    // console.log(`Sid says hello`);
}

// heroPower.hitesh()
// myHeroes.hitesh()
myHeroes.heySid()
// heroPower.heySid()


// Inheritance

const user = {
    name : "Harry",
    email : "sam@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupoort = {
    isAvailable : false
}

const tASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : teachingSupoort
}

teacher.__proto__ = user

// Modern synatx
Object.setPrototypeOf(teachingSupoort,teacher)

let anotherUserName = "Harry      "
String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.truelength()
"siddharth".truelength()
"hdvdgvgd   ".truelength()