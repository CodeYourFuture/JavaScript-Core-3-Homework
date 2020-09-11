/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/
const URL = 'https://codeyourfuture.herokuapp.com/api/greetings';
fetch(URL)
    .then(response => {
        return response.text();
    })
    .then(greeting => {
        document.getElementById('greeting-text').innerHTML = greeting;
    }); 

    // using "await" method
/* 
async function greetings(){
    const response = await fetch(URL);
    const data = await response.text();
    document.getElementById('greeting-text').textContent = data;

} 
greetings(); 
*/