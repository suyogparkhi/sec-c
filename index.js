const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 128; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.setProperty('--size', `${2 + Math.random() * 5}rem`);
  bubble.style.setProperty('--distance', `${6 + Math.random() * 5}rem`);
  bubble.style.setProperty('--position', `${-5 + Math.random() * 120}%`);
  bubble.style.setProperty('--time', `${2 + Math.random() * 3}s`);
  bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
  bubblesContainer.appendChild(bubble);
}

