window.onload = function () {
  const main = document.getElementById('root');

  const h1 = document.createElement('h1');
  const fetchDogButton = document.createElement('button');
  const ul = document.createElement('ul');

  h1.textContent = 'Dogs are awesome!';
  fetchDogButton.textContent = 'Fetch a dog';

  main.appendChild(h1);
  main.appendChild(fetchDogButton);
  main.appendChild(ul);

  fetchDogButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          const li = document.createElement('li');
          const img = document.createElement('img');
          const previouslyAddedListItem = document.querySelector('li');

          img.src = data.message;

          li.appendChild(img);
          ul.insertBefore(li, previouslyAddedListItem);
        } else {
          handleError();
        }
      })
      .catch((err) => {
        console.log(err);
        handleError();
      });
  });

  const handleError = () => {
    const error = document.createElement('p');
    const li = document.createElement('li');
    const previouslyAddedListItem = document.querySelector('li');
    error.textContent = "Sorry, can't fetch a dog for you :(";
    error.classList.add('error');

    li.appendChild(error);
    ul.insertBefore(li, previouslyAddedListItem);
  };
};
