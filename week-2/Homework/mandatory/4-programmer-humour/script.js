let parentEl = document.querySelector(".row");

function fetchAPI() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      let dataReceived = data;
      console.log(dataReceived.img);
      let imgEl = document.createElement("img");
      document.querySelector(".title").textContent = dataReceived.title;
      //parentEl.innerHTML = `<img src="${}" alt="${dataReceived.alt}">`;
      imgEl.setAttribute("src", dataReceived.img);
      imgEl.setAttribute("alt", dataReceived.alt);

      parentEl.appendChild(imgEl);
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchAPI();
