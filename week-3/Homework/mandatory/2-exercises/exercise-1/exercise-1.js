const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

function introduceYourself(details) {
  let { name, age, favouriteFood } = details;
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
