
fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let newImage = document.createElement("img");
        newImage.src = data.img;
        document.body.append(newImage);
    })
    .catch(function (error) {
        console.log(error);
    })



