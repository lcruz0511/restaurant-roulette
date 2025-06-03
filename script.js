document.addEventListener('DOMContentLoaded', () => {
  const restaurants = ['Pizza', 'Sushi', 'Tacos', 'Burgers', 'Curry', 'Pasta'];
  const spinBtn = document.getElementById('spinBtn');
  const wheel = document.getElementById('wheel');

  const anglePerSlice = 360 / restaurants.length;

  restaurants.forEach((name, i) => {
    const angle = i * anglePerSlice;

    const label = document.createElement('div');
    label.className = 'label';
    label.style.transform = `rotate(${angle}deg)`;

    const text = document.createElement('span');
    text.textContent = name;
    text.style.transform = `rotate(-${angle}deg) translateY(20px)`; // upright and moved outward

    label.appendChild(text);
    wheel.appendChild(label);
  });

  spinBtn.addEventListener('click', () => {
    const randomRotation = Math.floor(3600 + Math.random() * 360);
    wheel.style.transform = `rotate(${randomRotation}deg)`;
  });
});
