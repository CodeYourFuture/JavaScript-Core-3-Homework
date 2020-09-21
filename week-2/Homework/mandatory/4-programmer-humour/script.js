fetch(`https://xkcd.now.sh/?comic=latest`)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		let image = document.createElement("img");
		image.setAttribute("src", data.img);
		document.body.appendChild(image);
	})
	.catch(function (error) {
		console.log(error);
	});
