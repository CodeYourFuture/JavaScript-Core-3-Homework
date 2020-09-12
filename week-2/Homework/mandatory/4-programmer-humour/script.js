

fetch (`https://xkcd.now.sh/?comic=latest`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let div=document.createElement('div');
    div.setAttribute('id','imgContainer');
    document.body.appendChild(div);
    let image=document.createElement('img');
    image.setAttribute('class','imgClass');
    image.src=data.img;
    div.appendChild(image);
})
.catch(function(error){
    alert(error);
})