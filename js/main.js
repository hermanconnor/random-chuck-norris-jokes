'use strict';

const initApp = () => {
  const jokeEl = document.getElementById('joke');
  const jokeBtn = document.getElementById('joke-btn');
  const URL = 'https://api.chucknorris.io/jokes/random';

  const handleResponse = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        displayJoke(data.value);
      } else {
        handleError();
      }
    }
  };

  const displayJoke = (joke) => {
    jokeEl.textContent = joke;
  };

  const handleError = () => {
    jokeEl.textContent = 'Something Went Wrong ☹️ (Not Funny)';
    console.error('Error fetching joke:', this.statusText);
  };

  const generateJoke = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.onreadystatechange = handleResponse;
    xhr.send();
  };

  // Initial joke load
  generateJoke();

  // Event listener for button
  jokeBtn.addEventListener('click', generateJoke);
};

document.addEventListener('DOMContentLoaded', initApp);
