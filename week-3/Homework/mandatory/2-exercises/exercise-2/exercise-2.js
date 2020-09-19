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
];

function displayNames(arr) {
    for(var i = 0; i < arr.length; ++i) {
        if (arr[i].house === "Gryffindor") {
            let { firstName, lastName } = arr[i];
            console.log(`${firstName} ${lastName}`);
        }}
}

displayNames(hogwarts);

console.log("");

function displayNames_v2(arr) {
    for(var i = 0; i < arr.length; ++i) {
        if (arr[i].pet !== null  &&  arr[i].occupation === "Teacher") {
            let { firstName, lastName } = arr[i];
            console.log(`${firstName} ${lastName}`);
        }}
}

displayNames_v2(hogwarts);