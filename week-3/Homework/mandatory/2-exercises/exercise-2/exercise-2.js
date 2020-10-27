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


function GryffindorHouse(hogwarts)
{
    for(let i=0;i<hogwarts.length;i++)
    {
        // console.log(hogwarts[i]);
        let {firstName,lastName,house,pet,occupation}=hogwarts[i];
        if(house==="Gryffindor")
            console.log(firstName+" "+lastName);
    }
    console.log(" \n ")
    for(let i=0;i<hogwarts.length;i++)
    {
        let {firstName,lastName,house,pet,occupation}=hogwarts[i];
        // console.log(" \n ")
        if(pet!=null)
            console.log(firstName+" "+lastName);
    }
}

GryffindorHouse(hogwarts);