//  Appended img with only JS codes 
  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imgElem = document.createElement("img");
      const body = document.getElementsByName("BODY");
      imgElem.src = `${data.img}`;
      document.body.appendChild(imgElem);
    })
    .catch((error) => {
      console.log(error);
    });

// alternative option using HTML code to create a divElem first and create + append the img divElem // 
fetch(`https://xkcd.now.sh/?comic=latest`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const divElem = document.querySelector("#divElem")
    const imgElem = document.createElement("img");
    imgElem.src = `${data.img}`;
    divElem.appendChild(imgElem);
  })
  .catch((error) => {
    console.log(error);
  });

      