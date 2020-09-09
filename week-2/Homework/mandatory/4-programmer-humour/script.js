// function getHumor(){

// let imgNew= document.getElementById("humorImg");

// let humorText = document.getElementById("humorContent")

// fetch("https://xkcd.now.sh/?comic=latest")
// .then(response => response.json())

// .then(function(data){
//   humorText.innerText = data.alt;
// })

// .catch(error => console.log(error))
// }
// getHumor();

function makeProfile(expText, image) {
    let profile = document.createElement("div");
  
    profile.innerHTML = `
      <div class="profile">
    
        <p>${expText}</p>
        <img src="${image}" />
      </div>`;
  
    return profile;
  }
  
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let expText = data.alt;
      let image = data.img;
  
      let profileElement = makeProfile( expText, image);
  
      document.body.appendChild(profileElement)
    })
    .catch(function(err) {
      console.log(err);
    })