fetch("https://xkcd.now.sh/?comic=latest")
  .then((data) => data.json())
  .then((joke) => {
    let jokeDiv = document.createElement("div");
    jokeDiv.innerHTML = `<img src = ${joke.img}>`;
    document.body.appendChild(jokeDiv);
  })
  .catch((err) => console.log(err));
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.paddingTop = "50px";
