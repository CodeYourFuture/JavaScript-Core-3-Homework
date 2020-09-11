var btn = document.getElementById('btn');
var frame = document.getElementById('frame');
const URL = 'https://dog.ceo/api/breeds/image/random';

btn.addEventListener('click',function(){
    //when the button is clicked getData() function is triggered
    getData().catch(error =>{
        console.error(error);

    });
});

async function getData() {

    const response = await fetch(URL);
    const data = await response.json();

    var img = document.createElement("img");
    img.setAttribute('src', data.message);
    img.setAttribute('width', '300px');
    img.setAttribute('height', '300px');
    frame.appendChild(img);
}