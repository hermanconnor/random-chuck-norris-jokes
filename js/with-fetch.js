'use strict';

const initApp = () => {
  const jokeEl = document.getElementById('joke');
  const jokeBtn = document.getElementById('joke-btn');
  const URL = 'https://api.chucknorris.io/jokes/random';

  const displayJoke = (joke) => {
    jokeEl.textContent = joke;
  };

  const handleError = () => {
    jokeEl.textContent = 'Something Went Wrong ☹️ (Not Funny)';
  };

  const generateJoke = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      displayJoke(data.value);
    } catch (error) {
      handleError();
      console.error('Fetch error:', error);
    }
  };

  generateJoke();
  jokeBtn.addEventListener('click', generateJoke);
};

document.addEventListener('DOMContentLoaded', initApp);
