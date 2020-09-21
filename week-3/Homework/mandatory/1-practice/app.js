window.addEventListener("load", () => {
	let lat = 51.5861;
	let long = 0.2307;
	let temperatureDescription = document.querySelector(
		".temperature-description"
	);
	let temperatureDegrees = document.querySelector(".temperature-degree");
	let locationTimeZone = document.querySelector(".location-timezone");
	let weatherIcon = document.getElementById("icon");

	const api = `https://api.openweathermap.org/data/2.5/weather?q=larbaa,algeria&appid=5b9d824995b56422217003ce1c8d694a`;
	fetch(api)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			//console.log(data);
			console.log(data);
			const { temp } = data.main;

			const description = data.weather[0].description;
			const city = data.name;
			const { country } = data.sys;
			//set dom elements from the API
			temperatureDegrees.textContent = Math.round(temp - 273);
			temperatureDescription.textContent = description;
			locationTimeZone.textContent = city + " " + country;
			weatherIcon.setAttribute(
				"src",
				`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
			);
		})
		.catch((error) => {
			console.log(error);
		});
});
