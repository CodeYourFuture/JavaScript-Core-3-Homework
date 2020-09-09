function setup()
{
    let addDogButton=document.querySelector(".btn");

    addDogButton.addEventListener("click",createAndAddDog);
}


function createAndAddDog()
{
    let ul=document.querySelector(".image-container-ul");
    let li=document.createElement("li");
    let dogImage=document.createElement("img");


    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
        return response.json();
    })
    .then(function(dogData){
        console.log(dogData.message);
        dogImage.src=dogData.message;
        dogImage.setAttribute("class","image");
    })

    li.appendChild(dogImage);
    ul.appendChild(li);

}

window.onload=setup;