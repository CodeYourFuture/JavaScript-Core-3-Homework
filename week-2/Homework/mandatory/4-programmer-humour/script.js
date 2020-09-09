function callFetch()
{
    let image=document.querySelector(".image")
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.img);
        image.src=data.img;
    })
}

function setup()
{
    callFetch();
}

window.onload=setup;