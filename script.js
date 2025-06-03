document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("restaurant-form");
  const input = document.getElementById("restaurant-input");
  const list = document.getElementById("restaurant-list");
  const spinButton = document.getElementById("spin-button");
  const wheel = document.getElementById("wheel");
  const resultDisplay = document.getElementById("choose-restaurant");

  let restaurants = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = input.value.trim();

    if (name) {
      restaurants.push(name);
      const li = document.createElement("li");
      li.textContent = name;
      list.appendChild(li);
      input.value = "";

      drawWheel();
    }
  });

  function drawWheel() {
    wheel.innerHTML = ""; // Clear old wheel
    const anglePerSlice = 360 / restaurants.length;

    restaurants.forEach((name, i) => {
      const angle = i * anglePerSlice;

      const label = document.createElement('div');
      label.className = 'label';
      label.style.setProperty('--angle', `${angle}deg`);
      label.style.transform = `rotate(${angle}deg)`;

      const text = document.createElement('span');
      text.textContent = name;
      text.style.transform = `rotate(-${angle}deg) translateY(20px)`;

      label.appendChild(text);
      wheel.appendChild(label);
    });

    // Update wheel background using conic-gradient
    const colors = restaurants.map((_, i) => `hsl(${i * (360 / restaurants.length)}, 70%, 70%) ${i * anglePerSlice}deg ${(i + 1) * anglePerSlice}deg`);
    wheel.style.background = `conic-gradient(${colors.join(',')})`;
  }

  spinButton.addEventListener("click", () => {
    if (restaurants.length === 0) {
      resultDisplay.textContent = "Add some restaurants first!";
      return;
    }

    const angle = 360 / restaurants.length;
    const selected = Math.floor(Math.random() * restaurants.length);
    const rotation = 3600 + (360 - (selected * angle) - angle / 2);

    wheel.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      resultDisplay.textContent = `🎯 You should eat at: ${restaurants[selected]}`;
    }, 4000);
  });
});
