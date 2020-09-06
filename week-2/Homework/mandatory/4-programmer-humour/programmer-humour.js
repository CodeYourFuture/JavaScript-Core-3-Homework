const renderImage = (imageURL) => {
    const container = document.querySelector("#image-container");
    let image = document.createElement("img");
    container.appendChild(image);
    image.src = imageURL;
}

const setup = () => {
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
        .then(data => { console.log(data) ; renderImage(data.img) })
    .catch( error => console.log(error));
}

window.onload = setup;