let hogwarts = [
    { firstName: "Harry", lastName: "Potter", house: "Gryffindor", pet: "Owl", occupation: "Student" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor", pet: "Cat", occupation: "Student" },
    { firstName: "Draco", lastName: "Malfoy", house: "Slytherin", pet: null, occupation: "Student" },
    { firstName: "Cedric", lastName: "Diggory", house: "HufflePuff", pet: null, occupation: "Student" },
    { firstName: "Severus", lastName: "Snape", house: "Slytherin", pet: null, occupation: "Teacher" },
    { firstName: "Filius", lastName: "Flitwick", house: "Ravenclaw", pet: null, occupation: "Teacher" },
    { firstName: "Pomona", lastName: "Sprout", house: "Hufflepuff", pet: null, occupation: "Teacher" },
    { firstName: "Minerva", lastName: "McGonagall", house: "Gryffindor", pet: null, occupation: "Teacher" },
    { firstName: "Albus", lastName: "Dumbledore", house: "Gryffindor", pet: "Phoenix", occupation: "Teacher" }
]

let minihogwarts =[
  char1,
  char2,
  char3,
  char4,
  char5,
  char6,
  char7,
  char8,
  char9,
] = hogwarts;


function extract(minihogwarts) {

  minihogwarts.forEach((element) => {
    if (element.house === "Gryffindor")
      console.log(`${element.firstName} ${element.lastName}`);
  });

  console.log("=============");

  minihogwarts.forEach((element) => {
    if (element.occupation === "Teacher" && element.pet !== null)
      console.log(`${element.firstName} ${element.lastName}`);
  });
}
extract(minihogwarts);