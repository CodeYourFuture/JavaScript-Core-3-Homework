let unList = document.getElementById("unList");
document.body.appendChild(unList);
function callAPI() {
	fetch(`https://dog.ceo/api/breeds/image/random`)
		.then(function (response) {
			return response.json();
		})
		.then(function (loadImage) {
			let imageList = document.createElement("li");
			let dogImage = document.createElement("img");
			imageList.style.display = "inline";
			dogImage.style.height = "250px";
			dogImage.style.width = "250px";
			dogImage.setAttribute("src", loadImage.message);
			imageList.appendChild(dogImage);
			unList.appendChild(imageList);
		})
		.catch(function (error) {
			console.log(error);
		});
}

let button = document.getElementById("fetchButton");
button.style.margin = "0 40%";
button.style.padding = "2% 2%";
button.style.fontSize = "20px";
button.style.backgroundColor = "aqua";
button.style.border = "none";
button.style.borderRadius = "5px";
button.addEventListener("click", function () {
	callAPI();
});
let mainDiv = document.getElementById("mainDiv");
mainDiv.style.backgroundColor = "aqua";
mainDiv.style.width = "100%";

//mainDiv.style.display = "flex";
//mainDiv.style.backgroundColor = "aqua";
