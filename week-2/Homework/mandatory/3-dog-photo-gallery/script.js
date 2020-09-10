let getImgButton = document.getElementById("getImage");
getImgButton.addEventListener("click", (event) => {
    let ulElem = document.getElementById("dogList");
    let liElem = document.createElement("li");
    let imgElem = document.createElement("img");
    ulElem.appendChild(liElem);
    liElem.appendChild(imgElem);

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (dog) {
            console.log(dog);
            imgElem.src = dog.message;
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
});