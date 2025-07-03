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
        <span class="rating-text">${restaurant.rating} (${
    restaurant.reviewsCount
  }+)</span>
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
    <nav>
      ${renderNavigation(restaurant.menu)}
    </nav>
    <section class="menu">
        ${renderMenu(restaurant.menu)}
    </section>
  </main>
  `;
}

function createNavigation(category) {
  return /*html*/ `
    <a href="#${category}">
      ${formatCategoryName(category)}
    </a>
  `;
}

function createMenu(category, dishes) {
  return /*html*/ `
    <section id="${category}">
      <h3>${formatCategoryName(category)}</h3>
      ${renderMenuInfo(dishes)}
    </section>
  `;
}

function createMenuInfo(dish) {
  return /*html*/ `
    <div class="menu-item">
      <h4><strong>${dish.name}</strong></h4>
      <p>ab <strong>${dish.price.toFixed(2)} €</strong></p>
      <p>${dish.description}</p>
    </div>
  `;
}