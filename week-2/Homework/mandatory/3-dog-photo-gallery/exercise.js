
let getButton = document.querySelector("button");
getButton.addEventListener("click", function () {
fetch("https://dog.ceo/api/breeds/image/random")
.then(function (response) {
    return response.json();
})


 
.then(function (data) {
        let newImage = document.createElement("img");
        newImage.src = data.message;
        newImage.style.width = "150px";
        newImage.style.height = "150px";
        let ul = document.querySelector("ul");
        ul.append(newImage);
    })
    .catch(function (error) {
        console.log(error);
    })
})


