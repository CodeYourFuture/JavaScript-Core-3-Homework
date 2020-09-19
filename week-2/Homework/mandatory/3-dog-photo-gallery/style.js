let newBut = document.getElementById('newBtn');
let photogalary = document.getElementById('dogPhoto');

newBu.addEventListener('click', function() {
    let newPhoto = document.createElement('li');
    let img = document.createElement('img');
    newPhoto.appendChild(img);
    photogalary.appendChild(newPhoto);
   


fetch(`https://dog.ceo/api/breeds/image/random`)
.then(function(response) {
return (response.json());
})

.then(function(data){
img.src = data.message;
})

})
