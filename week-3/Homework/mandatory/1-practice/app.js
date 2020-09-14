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

            
        })
    } else {console.log("Ups!")};
});

