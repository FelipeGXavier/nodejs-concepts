const arr = [1, 2, 3, 4, 5];
const obj = {
  x: 10,
  y: 15,
  z: 20
};

const entries = Object.entries(obj);
console.log("Entries: " + entries.join(" - "));

const keys = Object.keys(obj);
console.log("Keys: " + keys);

const values = Object.values(obj);
console.log("Values: " + values);

let source = {
  x: 1,
  y: {
    z: 0
  }
};

let target = source;

console.log(target, source);
source.x = 10;
console.log(target, source);

// One level of copy
let newTarget = Object.assign({}, source);
console.log(source, newTarget);
source.x = 99;
console.log(source, newTarget);

const cst = {
  a: 1
};
const cstTwo = {
  a: 2
};
let test = Object.assign({}, cst, cstTwo);
console.log(test);


let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1, arr2);
arr1[0] = 99;
console.log(arr1, arr2);

let arr3 = [...arr1];
console.log(arr1, arr3);
arr1[0] = 100;
console.log(arr1, arr3);

console.log("\n")

const person = {
  name: "Felipe",
  surname: "Xavier"
};
console.log("Has property: " + person.hasOwnProperty("name") + ", " + person.hasOwnProperty("age"));
person.age = 19;

const personCopy = Object.assign({}, person);

console.log(person, personCopy);


do {
  console.log("Once");
  break;
} while (true);

for (const prop in person) {
  console.log("Property: " + prop + ", value: " + person[prop])
}

const val = Object.values(person);
for (const value of val) {
  console.log("Value: " + value);
}

let myMap = new Map();
myMap.set("foo", "bar");
myMap.set(0, true);

console.log("Map: " + myMap.get("foo") + ", size: " + myMap.size);

for (const val of myMap) {
  console.log(val);
}

const duplicatedArr = [1, 2, 3, 1, 3, 4];
const mySet = new Set([...duplicatedArr]);
mySet.add(8);
mySet.delete(4);

console.log("Set: " + Array.from(mySet).join(" ") + ", has: " + mySet.has(4))

const keySet = mySet.keys();
const keyVal = mySet.values();

//var intersection = new Set([...set1].filter(x => set2.has(x)));

const fObject = {
  foo: function () {
    console.log("My Function");
  }
};

console.log(fObject.foo());

const f = (...args) => console.log(args);

f(1, 2, 3, 4, 5);

function personFactory(name, surname) {
  let person = {};
  person.name = name;
  person.surname = surname;
  person.displayName = displayName;

  function displayName() {
    return `${person.name} ${person.surname}`;
  }
  return person;
}

const newPerson = personFactory("Felipe", "Xavier");
console.log(newPerson.displayName());

const destArr = ['orange', 'apple', 'pineapple'];
let [orange, apple, pinneaple] = destArr;
console.log(orange, apple, pinneaple);

let [orangeType, ...rest] = destArr;
console.log(orangeType, rest)


let wizards = {
  gryffindor: 'Potter',
  slytherin: 'Malfoy',
  hufflepuff: 'Diggory',
  ravenclaw: 'Chang'
};

let {
  gryffindor: harry,
  slytherin: draco
} = wizards;
console.log(harry, draco)

let {
  ravenclaw,
  hufflepuff
} = wizards;
console.log(ravenclaw, hufflepuff);

function fn(callback) {
  let x = 10;
  callback(x);
}

fn((x) => console.log(x * 10));


const withoutSpaces = (value) => value.replace(/ /g, "");
const removeSpecialChars = (value) => value.replace(/[^a-zA-Z ]/g, "");
const compose = (f1, f2) => {
  (value) => {
    f2(f1(value))
  }
};


function Customer(name, age) {
  this.name = name;
  this.age = age;
}

Customer.prototype.display = function () {
  console.log(`${this.name}, ${this.age}`)
};

let customer = new Customer("Giovane", 21);
customer.display();