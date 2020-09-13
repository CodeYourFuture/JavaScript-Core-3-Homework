/*
scope, place you can access variable within code base

function foo() {
    let y = 2;
    return y;
}

let z = foo();

console.log(z);
cannot log y as not exist within scope!

var old JS (should not be used)

scope, global (outside of everything, top of page not indented)
scope, block = only used within that block i.e. "scoped"

block = code within { }

function foo() {block}
if() {block}
while() {block}

any loop etc..

let name = "jack" < global
if() {
    name = "tom" it is reassigned and takes the new global spot
}

if() {
    let name = "bob" makes a new variable called name within scope
}

let name;

^ vairable set as undefined

if() {
    name = "test"
}

sets the value later


function grandfather() {
    let name = "hammad";
    // likes is not accessible here
    function parent() {
        //name is accessible here
        //likes is not
        function childe () {
            // inner levle of scope
            // name available
            let likes = "code"

            console.log(name, likes)
        }
        child();
    }
    parent();
}
grandfather();

can use parent scope if nested but not child!!!

vairable shadowing, variable in nested scope, same name as variable higher up
one closest to you wins, if in current scope that is used!

not override

can reassign variable in a nested function/if

let x = 10;

function 222() {
    let name = "dan"

    if(x > 5) {
        name = "jack";
    }
}

^ this will work,

var = function scope or global,

function scope = if a variable is included within a function it is only 
available in that function

function{
    if {
        var x
    }
    console.log(x) works!
}

if var used within if statement it is global as not function scoped!!!

if two var used with same name within if statements so global? they do not clash!
also 2nd overrides first

var hoists variables up!

let / const = work identically with scope


Jacks JS rules,

1. do not use Var... ever!
2. if changing value over time use let 
3. if wont ever change value use const

2/3 helps reader understand

if const. cant use = "something else"!

if const name = "jack" know it wont change
let faveColour = "red" know that it can change

can rule out of debugging as variable does not change

const names = ["jack"]
cannot do 
names = ["alice", "Jack"]

can do
names.push("alice")

const array means names must reference the array, array can be updated but
variable cannot be re assigned

eslint to update var that do not change to const!

cannot do const name = x
let name = y

on vs code use [-] next to functions to see scope!

if no let/var/const will be used as a global variable

d = 1

^ global


~~~~~~~~~~~

arrays and destructuring

let fruits = ["apple", "orange"]

let firstFruit = fruits[0]

console.log(firstFruit)




let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
// Create variables to store the values here

let dad = familyMembers[0];
let mom = familyMembers[1];
let son = familyMembers[2];
let daughter = familyMembers[3];
let baby = familyMembers[4];

console.log(
  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`
);

destructure extract values from array in 1 line of code,

let animals = ["cat", "dog"]

let [CAT, DOG] = animals;

console.log(`we have a ${cat} and 2  )

...rest ^rest of the values in the array

then [rest] or [rest[0], rest[1]]
*/

// let sentence = ["Hello", "Code", "Your", "Future"];

// // let firstWord = item[0];
// // let secondWord = item[1];
// // let thirdWord = item[2];
// // let fourthWord = item[3];

// let [firstWord, secondWord, thirdWord, fourthWord] = sentence;

// console.log(
//   `FirstWord: ${firstWord}, SecondWord: ${secondWord}, ThirdWord: ${thirdWord}, FourthWord: ${fourthWord},`
// );
// let animals = [{name: "cat", age: 4},{name: "dog", age: 6}]
// let [cat, dog] = animals
// console.log(dog.name, cat.name)

// let citiesByPopulation = [
//   { name: "London", population: 8000000 },
//   { name: "Birmingham", population: 1000000 },
//   { name: "Glasgow", population: 600000 },
//   { name: "Manchester", population: 500000 },
// ];
// // Assign variables using array destructuring on this line

// let [london, birmingham, glasgow, manchester] = citiesByPopulation;

// console.log(`${london.name} population is ${london.population}`);
// console.log(`${birmingham.name} population is ${birmingham.population}`);
// console.log(`${glasgow.name} population is ${glasgow.population}`);
// console.log(`${manchester.name} population is ${manchester.population}`);

//rest[0].name works!

/*
destructure object 

let claire = {
    name: "Claire",
    age: 21,
    occupation: "manager"
}

let {name, age, occupation} = claire

console.log(claire)

function numbers(a,b) {
    return [a,b]
}
console.log(numbers(2,5))

let [num1, num2] = numbers(2, 5);
*/

// function sumAndMultiply(a, b) {
//   return [a + b, a * b];
// }
// // Assign variables using array destructuring on this line

// let [sum, multiply] = sumAndMultiply(2, 5);

// console.log(
//   `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`
// );