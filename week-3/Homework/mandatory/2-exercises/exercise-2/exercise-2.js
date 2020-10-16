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


const displayName = (people) => {
    console.log("List of people in  Gryffindor house: ");
  people.forEach( ({ firstName, lastName, house }) =>house == "Gryffindor" && console.log(`${firstName} ${lastName}`) );
};

const isPetOwner = (people) => {
    console.log("List of Teachers with pets: ");
    people.forEach( ( { firstName, lastName, occupation, pet} ) => {
        if(occupation === "Teacher" && pet !== null){
            console.log(`${firstName} ${lastName}`);        
        }
    });
}
displayName(hogwarts);
isPetOwner(hogwarts);
