const personOne = {
    name: 'Popeye',
    age: 34,
    favouriteFood: 'Spinach'
}

let{name,age,favouriteFood} = personOne;

function introduceYourself(x) {
    console.log (`Hello, my name is ${x.name}. I am ${x.age} years old and my favourite food is ${x.favouriteFood}.`); 
}

introduceYourself(personOne);