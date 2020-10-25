
function makeRandomPhoto(photo) {
	const randomizedPhoto = Math.floor(Math.random() * randomPhoto.message);
	photo = randomizedPhoto;
	return photo;
}
let btnElem = document.querySelector(".btn-element");
//console.log(btnElem);
btnElem.addEventListener("click", () => {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			const ulElem = document.getElementById("ul-element");
			const liElem = document.createElement("li");
			const imgElem = document.createElement("img");
			imgElem.src = `${data.message}`;
			liElem.appendChild(imgElem);
			ulElem.appendChild(liElem);
			
		})
		.catch((error) => {
			return `No photos ${error}`;
		});
});

