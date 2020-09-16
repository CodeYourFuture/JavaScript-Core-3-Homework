window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
    
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
    
      fetch(api)
      .then(response =>{
          return response.json();
      })
      .then(data =>{
        console.log(data)
          const {temperature,summary, icon}= data.currently;
    //set Dom Elements from the API
    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;
    locationTimeZone.textContent = data.timezone;
    //set Icon
    setIcons(icon,document.querySelector('.icon'));
      });
    
    });
    
    }
    
    function setIcons(icon,iconID){
    const skycons = new Skycons({color:'white'});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
    }
    
    });
//Formula For CELSIUS
let celsius = (temperature - 32) * (5 / 9);
//set Icon
setIcons(icon,document.querySelector('.icon'));
    

//change teperature to celsius/farenheit
temperatureSection.addEventListener('click',()=>{
  if(temperatureSpan.textContent === 'F'){
    temperatureSpan.textContent = 'C';
    temperatureDegree.textContent = Math.floor(celsius);
  }else{
    temperatureSpan.textContent = 'F';
    temperatureDegree.textContent = temperature;
  }
});


    
        const api = `https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/`;
    
      fetch(api)
      .then(response =>{
          return response.json();
      })
      .then(data =>{
        console.log(data)
          const {temperature,summary, icon}= data.currently;
    //set Dom Elements from the API
    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;
    locationTimeZone.textContent = data.timezone;
    //set Icon
    setIcons(icon,document.querySelector('.icon'));
      });
    
    
    
    
    function setIcons(icon,iconID){
    const skyCons = new Skycons({color:'white'});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skyCons.play();
    return skyCons.set(iconID,Skycons[currentIcon]);
    };