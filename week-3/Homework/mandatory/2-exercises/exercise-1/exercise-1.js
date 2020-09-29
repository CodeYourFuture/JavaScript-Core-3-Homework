const personOne = {
    name: 'Popeye',
    age: 34,
    favouriteFood: 'Spinach'
}

function introduceYourself(anyPerson) {
    let {name, age, favouriteFood} = anyPerson;
    console.log (`Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`); 
}

introduceYourself(personOne);