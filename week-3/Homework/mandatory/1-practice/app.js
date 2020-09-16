window.addEventListener("load", () =>{
let long;
let lat;
let temperatureDegree = document.querySelector(".temperature-degree");
let temperatureDescription = document.querySelector(".temperature-description");
let locationTimezone = document.querySelector(".location-timezone");
let icon = document.querySelector(".icon");
let tempUnit = document.querySelector(".degree-section");
let tempSpan = document.querySelector(".tempSpan");




if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;


        

        const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=94e23f099b7dccbcf0c17f90983d18bc`;

       fetch(api)
            .then(Response => {
                return Response.json();

            })
            .then(data => {
              const temp = Math.round((data.main.temp * 9) / 5 - 459.67);
              const description = data.weather[0].description;
              const location = data.name;
              //DOM
              temperatureDegree.textContent = temp;
              temperatureDescription.textContent = description;
              locationTimezone.textContent = location;
            // icon
              let iconImg = document.createElement('img');
              iconImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
              icon.appendChild(iconImg);
              //change unit
              let celsius = (temp - 32) * (5/9);
              tempUnit.addEventListener("click", ()=>{
                  if(tempSpan.textContent === 'F'){
                      tempSpan.textContent = 'C';
                      temperatureDegree.textContent = Math.floor(celsius);

                  } else {
                      tempSpan.textContent = 'F'
                      temperatureDegree.textContent = temp;
                  }


              });



            });
             
        
    });

   
}
  

});