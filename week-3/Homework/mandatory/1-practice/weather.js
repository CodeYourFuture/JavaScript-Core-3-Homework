window.addEventListener("load", () =>{
let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        let key = "c04a2e32fa04e29b69c5098d28f21fc8"
        // const proxy = "http://cors-anywhere.herokuapp.com/";
      
        const api = `https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
     

    fetch(api)
    .then(response => {
        return response.json()
    })
    .then(function(data){
        console.log(data);
        const {temperature, summary} = data.currently;
        // set DOM element from API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        // set Icons
        setIcons(icon, document.querySelector(".icon"))
        });
    
    });
}

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon =  icon.replace(/-/g, "_").toUpperCase();
        console.log(currentIcon);
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});