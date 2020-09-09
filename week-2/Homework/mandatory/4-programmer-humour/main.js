function makeComicPage(title, num, img, alt, date, link, news, transcript){
    let comicPage = document.createElement("div");

    comicPage.innerHTML = `
        <h1>${title}</h1>

        <div class="number-container">
            <p>No. ${num}</p>
            <p>Date: ${date}</p>
        </div>

        <div class="img-text-container">
            <div class="img-container">
                <img src="${img}" alt="${alt}"/>
            </div>
            <div class="text-container">
                <a href="${link}"></a>
                <p>News: ${news}</p>
                <p>Transcript: ${transcript}</p>
            </div>
        </div>
    `;

    return comicPage;
}

fetch("https://xkcd.now.sh/?comic=latest")
    .then(function(response){
        return response.json();
    })
    .then(function(comic){
        // console.log(comic); see Line 40
        let title = comic.title;
        let num = comic.num;
        let date = `${comic.day} / ${comic.month} / ${comic.year}`
        let img = comic.img
        let alt = comic.alt;
        let link = comic.link;
        let news = comic.news;
        let transcript = comic.transcript;

        let comicElement = makeComicPage(title, num, img, alt, date, link, news, transcript);

        document.body.appendChild(comicElement);
    })
    .catch(function(err){
        console.log(err);
    })

/*
    alt: "It's rare to get both astronomers and astrologers equally mad at you, but apparently I've messed up both a bunch of star location databases AND the will of the fates."
    day: "7"
    img: "https://imgs.xkcd.com/comics/constellation_monstrosity.png"
    link: ""
    month: "9"
    news: ""
    num: 2356
    safe_title: "Constellation Monstrosity"
    title: "Constellation Monstrosity"
    transcript: ""
    year: "2020"
*/