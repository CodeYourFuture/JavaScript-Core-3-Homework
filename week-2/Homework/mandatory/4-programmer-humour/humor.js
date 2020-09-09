const URL = 'https://xkcd.now.sh/?comic=latest';

async function getData(){
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
    var img = document.createElement("img");
    img.setAttribute('src', data.img);
    img.setAttribute('id', 'img');
    document.body.appendChild(img);
}

getData().catch(error =>{
    console.error(error);
});