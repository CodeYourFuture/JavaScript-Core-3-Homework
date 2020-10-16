let imageDisplay = document.querySelector(".displayImage");
let displayBtn = document.querySelector("#displayBtn");
let displayImage = document.querySelector(".displayImage");
let imageEl = document.createElement("img");
let liEl = document.createElement("li");
displayBtn.addEventListener("click", uploadRandomDogImage);

function uploadRandomDogImage() {
  displayImage.textContent = "Loading...";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      displayImage.textContent = "";
      imageEl.src = data.message;
      imageEl.className = "dogImage";
      liEl.appendChild(imageEl);
      displayImage.appendChild(liEl);
    })
    .catch((err) => console.log(err));
}
