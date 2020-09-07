//SELECTOR
let imageTag = document.getElementById('imageTag');

function apiCall(){
    fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        imageTag.src = data.img;


    }).catch(err => {
        console.error(err);
        console.log('error!!!!');
    });
}

async function getApiCall(){
    let response =  await fetch('https://xkcd.now.sh/?comic=latest');
    let convertToJson = await response.json();
    console.log(convertToJson);
    imageTag.src = convertToJson.img;
}


getApiCall().catch(err => {
    console.error(err);
    console.log('error!!!!');
});
