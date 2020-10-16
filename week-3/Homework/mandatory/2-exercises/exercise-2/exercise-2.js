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

var [Harry,Hermione, Draco, Cedric, Severus, Filius, Pomona, Minerva, Albus ] = hogwarts;
// var [Gryffindor, Slytherin, Hufflepuff, Ravenclaw] = hogwarts;
console.log(`${Harry.firstName} ${Harry.lastName}`);
console.log(`${Hermione.firstName} ${Hermione.lastName}`);
console.log(`${Minerva.firstName} ${Minerva.lastName}`);
console.log(`${Albus.firstName} ${Albus.lastName}`);




