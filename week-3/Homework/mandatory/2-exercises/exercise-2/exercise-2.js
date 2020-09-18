let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

/*
 In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
- Use array destructuring to extract the values you need out of the array.
*/

function getGryffindorHouseMates(arr) {
  let mates = arr.filter((mate) => {
    return mate.house === "Gryffindor";
  });
  mates.forEach((name) => {
    let { firstName, lastName } = name;
    console.log(`${firstName} ${lastName}`);
  });
}
getGryffindorHouseMates(hogwarts);

/*
## Task 2

- In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
- Use array destructuring to extract the values you need out of the array.
*/

function getTeachersWithPet(arr) {
  let teachersWithPet = arr.filter((teacher) => {
    return teacher.occupation === "Teacher" && teacher.pet !== null;
  });
  teachersWithPet.forEach((name) => {
    let { firstName, lastName } = name;
    console.log("\nTeacher(s) with pet: ");
    console.log(`${firstName} ${lastName}`);
  });
}
getTeachersWithPet(hogwarts);
