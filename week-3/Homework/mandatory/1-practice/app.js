window.addEventListener("load", () => {
  let lon;
  let lat;
  let units = "&units=metric";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1912a0abbf3e8fabf3a7532ad1fe6bf3${units}`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let celsius = data.main.temp;
          let fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
          document.querySelector(".temperature-degree").innerHTML = celsius;
          document.querySelector(".temperature-description").innerHTML =
            data.weather[0].description[0].toUpperCase() +
            data.weather[0].description.slice(1);
          document.querySelector(".location-timezone").innerHTML =
            data.name + " " + data.sys.country;
          document.querySelector(
            ".location p"
          ).innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

          document
            .querySelector(".temperature")
            .addEventListener("click", () => {
              if (
                document.querySelector(".degree-section span").innerText === "C"
              ) {
                document.querySelector(".degree-section span").innerText = "F";
                document.querySelector(
                  ".temperature-degree"
                ).innerHTML = fahrenheit;
              } else {
                document.querySelector(".degree-section span").innerText = "C";
                document.querySelector(
                  ".temperature-degree"
                ).innerHTML = celsius;
              }
            });
        })
        .catch((err) => console.log(err));
    });
  } else {
    console.log("Ups!");
  }
});
