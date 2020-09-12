let button = document.querySelector("button");
let ul = document.querySelector("ul");

function fetchData() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let div = document.querySelector("div");
            let image = data.img;
            console.log(image);
            div.innerHTML = `<img src = ${image}>`;
        })
        .catch((err) => console.log(err));
}
fetchData();
