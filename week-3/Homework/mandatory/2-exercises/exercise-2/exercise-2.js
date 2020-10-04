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

  //Alternative way 
// let griF = hogwarts.filter(x => x.house ==="Gryffindor").map(x => x.firstName+x.lastName).toString();
// console.log(griF);
function GryffindorPeople([Harry,Hermione, , , , , ,Minerva,Albus]){
    console.log(Harry.firstName,Harry.lastName,Hermione.firstName,Hermione.lastName,Minerva.firstName,Minerva.lastName,Albus.firstName,Albus.lastName);
}

GryffindorPeople(hogwarts); 
//let[firstName,lastName,...rest] = hogwarts;
