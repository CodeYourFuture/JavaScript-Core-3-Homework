/* got an error 429 - too many requests. Tried using this https://openweathermap.org/api. but could not get it to work with the proxy */

window.addEventListener("load", () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            /* const key = `1487bcd90d23b6e404ba291d04177780`; */
            const proxy = "https://cors-anywhere.herokuapp.com/";
            //Got an error 429.
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                });
        });
    }
});
