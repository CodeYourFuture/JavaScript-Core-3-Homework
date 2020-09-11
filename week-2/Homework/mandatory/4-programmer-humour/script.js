let getImgButton = document.getElementById("getImage");
let latestDiv = document.getElementById("latest");
let imageElem = document.createElement("img");
latestDiv.appendChild(imageElem);

getImgButton.addEventListener("click", (event) => {

fetch('https://xkcd.now.sh/?comic=latest')
    .then(function (response) {
        return response.json();
    })
    .then(function (greeting) {
        console.log(greeting);
        imageElem.src = greeting.img;
    })
    .catch(function (error) {
        console.error('Error:', error);
    });

});