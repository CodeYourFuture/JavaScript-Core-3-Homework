fetch("https://xkcd.now.sh/?comic=latest")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.img);
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let img = document.createElement("img");
    li.appendChild(img);
    ul.className = "container"
    ul.style.display = "flex"
    ul.style.margin = "0 auto"
    ul.style.width ="150px"
    li.style.listStyleType = "none";
    document.body.style.backgroundColor = "silver"
    img.className = "image"
    img.src = data.img;
    ul.appendChild(li)
    console.log(ul)
    document.body.appendChild(ul)
})
.catch(function (error){

    console.log(error);
}); 