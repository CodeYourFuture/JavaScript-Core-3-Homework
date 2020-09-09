let button = document.createElement("button");
button.style.width = "100px";
button.innerText = "Get it!";
document.body.appendChild(button);
let ul = document.createElement("ul");
ul.style.listStyleType = "none";
document.body.appendChild(ul);

button.onclick  = () => {fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(dataResp => {
    let li = document.createElement("li");
   li.innerHTML = `<img src = ${dataResp.message} width = "300px" height = "auto">`;
   console.log(dataResp);
   ul.appendChild(li);
})
.catch(err => console.log(err));
};