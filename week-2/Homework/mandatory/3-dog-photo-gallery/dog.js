let button = document.querySelector("#btn-dog");
let gallery = document.querySelector("#imgGallery");
let list = document.createElement("li");
let img = document.createElement("img");
list.appendChild(img);
gallery.appendChild(list);

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => img.setAttribute("src", data.message))
    .catch((error) => console.log(error));
});
