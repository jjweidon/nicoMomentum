console.log("재웅이 메모장");

const a = 5;
const b = "4";
let myName = "weidon";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "정재웅";
console.log("my name is " + myName);

const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
console.log(week[5]);

//Add one mort day to the array
week.push("everyday");

console.log(week);

const player = {
    name: "weidon",
    points: 10,
    fat: false,
};
console.log(player);
console.log(player.name);
player.fat = true;
console.log(player);
player.lastName = "정";
player.points = player.points + 15;
console.log(player);

function sayHello(nameOfPerson){
    console.log("Hello! "+ nameOfPerson);
}
sayHello("재웅");
sayHello("weidon");
sayHello("웅이");

function plus(a, b) {
    console.log(a + b);
}
plus(8, 60);

const person = {
    name: "weidon",
    sayHello: function(otherName) {
        console.log("Hello! " + otherName);
    }
}
person.sayHello("wiedon");