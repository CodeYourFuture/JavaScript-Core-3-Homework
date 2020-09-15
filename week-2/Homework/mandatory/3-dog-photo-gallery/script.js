let btnOne = document.getElementById("buttonOne");
let btnTwo = document.getElementById("buttonTwo");
let dogImage = document.getElementById("dogImage");

//EVENT LISTENERS
btnOne.addEventListener("click", () => {
  getDogImages();
});
btnTwo.addEventListener("click", getDogImages);

//FUNCTION TO GET DOG PICTURES(API)
function getDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      document.getElementById("dogImage").src = data.message;
    })
    .catch((err) => {
      console.log("error!!!!");
      console.error(err);
    });
}
