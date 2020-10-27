// Retrieve the JSON
fetch("https://dog.ceo/api/breeds/image/random")
    // Get the response and extract the JSON
    .then(function(response){
        return response.json();
    }) 
    // Do something with JSON
    .then(function(dog){
        // console.log(dog) to see what property name / object key is used
        const ul = document.getElementById("ul");
        const li = document.createElement("li");
        const img = document.createElement("img");

        ul.append(li);
        li.append(img);

        img.src = dog.message;
    })
    // Incorporate error handling if something goes wrong
    .catch(function(err){
        console.log(err);
    });

// Add event listener
/*const button = document.createElement("button");

const refresh = function refreshPage(){
    return location.reload();
}

button.addEventListener("click", refresh);*/