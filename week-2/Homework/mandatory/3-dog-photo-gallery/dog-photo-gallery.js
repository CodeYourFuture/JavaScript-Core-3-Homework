const fetchRandomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => addImageToGallery(data.message))
        .catch(error => console.log(error));
}

const addImageToGallery = (imageURL) => {
    const gallery = document.querySelector("#dog-gallery");
    let imageContainer = document.createElement("li");
    let dogPhoto = document.createElement("img");
    gallery.appendChild(imageContainer);
    imageContainer.appendChild(dogPhoto);
    dogPhoto.src = imageURL;
}

const setup = () => {
    const button = document.querySelector("#btn-add-photo");
    button.addEventListener("click", () => fetchRandomImage());
}

window.onload = setup;