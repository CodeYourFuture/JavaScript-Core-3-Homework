const body = document.querySelector('body');
    fetch('https://xkcd.now.sh/?comic=latest')
    .then( res => 
        res.json()
    )
    .then(data => {
        console.log(data)
        const imgTag = document.createElement('img');
        imgTag.setAttribute('src', data.img)
        body.appendChild(imgTag);
    })
    .catch(err => console.log(err))


    
    
