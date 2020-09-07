window.onload = function () {
  const root = document.getElementById('root');

  fetch('https://xkcd.now.sh/?comic=latest')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imgEl = document.createElement('img');
      const titleEl = document.createElement('h1');

      imgEl.src = data.img;
      imgEl.alt = data.alt;

      titleEl.textContent = data.title;

      root.appendChild(titleEl);
      root.appendChild(imgEl);
    })
    .catch((error) => {
      console.log(error);
      displayError();
    });

  const displayError = () => {
    const errorEl = document.createElement('p');
    errorEl.classList.add('error');
    errorEl.textContent =
      'Sorry, something went wrong while trying to fetch a joke.';
    root.appendChild(errorEl);
  };
};
