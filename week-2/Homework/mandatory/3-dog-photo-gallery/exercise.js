let submit = document.getElementById("my-button");
submit.addEventListener("click", function(){
    fetch("https://dog.ceo/api/breeds/image/random")

    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let ul = document.createElement("ul");

            let list = document.createElement("li"); 

            let image = document.createElement("img"); 

            image.src = data.message;

            list.appendChild(image);

            document.body.appendChild(list);  
            image.style.width = "100%"
            list.style.listStyle = "none"; 
            list.style.display = "flex";
            list.style.justifyContent = "center";
            list.style.margin ="10px";
            list.style.width = "40%";

            var del = document.createElement('button');
            del.style.textDecoration = 'none';
            del.innerHTML = 'Remove this?';
            del.style.color = 'white';
            del.style.backgroundColor = '#3CAEA3';
            //assign a function for it when clicked
            del.onclick = function() { deleteButton(list,this)}; 
            document.body.appendChild(del)

    })
})

.catch(function (error){
    console.log(error);
});
function deleteButton(x,y) {

    var parent = document.getElementsByTagName("BODY")[0];
    //remove the list
    parent.removeChild(x);
    //remove the button
    parent.removeChild(y);

} 