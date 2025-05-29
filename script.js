document.getElementById("restaurant-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const input = document.getElementById("restaurant-input");
    const name = input.value.trim();
    
    if (name) {
      const li = document.createElement("li");
      li.textContent = name;
      document.getElementById("restaurant-list").appendChild(li);
      input.value = "";
    }
  });
  
  document.getElementById("spin-button").addEventListener("click", function() {
    const restaurants = document.querySelectorAll("#restaurant-list li");
    if (restaurants.length > 0) {
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      const chosen = restaurants[randomIndex].textContent;
      document.getElementById("choose-restaurant").textContent = chosen;
    } else {
      document.getElementById("choose-restaurant").textContent = "Add some restaurants first!";
    }
  });