document.addEventListener("DOMContentLoaded", () => {
  renderMain();
});

function renderMain() {
  let mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";
  for (let i = 0; i < sushiRestaurant.length; i++) {
    mainContainer.innerHTML += createMainContainer(i);
  }
}

function createMainContainer(index) {
  let restaurant = sushiRestaurant[index];
  return /*html*/ `

  <header style="background: url('${restaurant.cover}')">
    <img src="${restaurant.logo}" alt="logo">
  </header>

  <main>
    <section class="main-header">
      <h2>${restaurant.name}</h2>
      <button><img src="assets/icons/info.svg" alt="info"> Über uns</button>
    </section>

    <section class="restaurant-meta">
      <div class="meta-item">
        <img src="assets/icons/star.svg" alt="reviews" />
        <span class="rating-text">${restaurant.rating} (${restaurant.reviewsCount }+)</span>
      </div>
      <div class="dot-separator">•</div>
      <div class="meta-item">
        <img src="assets/icons/shopping-card.svg" alt="Min. Bestellwert" />
        <span>Min. ${restaurant.minOrder.toFixed(2)} €</span>
      </div>
      <div class="dot-separator">•</div>
      <div class="meta-item">
        <img src="assets/icons/delivery.svg" alt="Lieferkosten" />
        <span>${restaurant.deliveryFee.toFixed(2)} €</span>
      </div>
      <div class="dot-separator">•</div>
      <div class="meta-item">
        <img src="assets/icons/info.svg" alt="info" />
      </div>
    </section>
    
  </main>
  `;
}

function openBasket() {
  let cart = document.getElementById("cart");
  cart.classList.add("open");
}

function closeBasket() {
  let cart = document.getElementById("cart");
  cart.classList.remove("open");
}
