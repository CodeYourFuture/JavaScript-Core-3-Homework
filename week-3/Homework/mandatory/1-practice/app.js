window.addEventListener("load", () =>{
    let long;
    let lat;
// alert(navigator.geolocation);
    if(navigator.geolocation){
        console.log("Here you are: 1");
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long, lat);

            var unirest = require("unirest");

            var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");
            
            req.query({
                "callback": "test",
                "id": "2172797",
                "units": "%22metric%22 or %22imperial%22",
                "mode": "xml%2C html",
                "q": "London%2Cuk"
            });
            
            req.headers({
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "c073bb86b7msh4b0849c103c6043p145e8djsn3c4ab7be832f",
                "useQueryString": true
            });
            
            
            req.end(function (res) {
                if (res.error) throw new Error(res.error);
            
                console.log(res.body);
            });
        })
    } else {console.log("Ups!")};
});

