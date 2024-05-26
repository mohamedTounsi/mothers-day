document.addEventListener('DOMContentLoaded', (event) => {
  const noButton = document.getElementById('no-button');

  noButton.addEventListener('mouseover', () => {
      const container = document.querySelector('.container');
      const containerRect = container.getBoundingClientRect();
      const buttonRect = noButton.getBoundingClientRect();

      const randomX = Math.floor(Math.random() * (containerRect.width - buttonRect.width));
      const randomY = Math.floor(Math.random() * (containerRect.height - buttonRect.height));

      noButton.style.position = 'absolute';
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
  });
});