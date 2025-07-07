function createMenuBox(item, index, contentId) {
  return /*html*/ `
    <div class="menubox">
      <h4><strong>${item.name}</strong></h4>
      <p>${item.description}</p>
      <p>${item.price.toFixed(2)} €</p>
      <button class="shoppingcart" onclick="addToCart(${index}, '${contentId}')">In den Warenkorb</button>
    </div>
  `;
}


function createCartItem(item, index) {
  return /*html*/ `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(2)} €</p>
      </div>
      <div class="cart-item-actions">
        <button onclick="decreaseQuantity(${index})">
          <img src="./assets/icons/left.svg" alt="Weniger">
        </button>
        <span class="quantity-display">${item.quantity}</span>
        <button onclick="increaseQuantity(${index})">
          <img src="./assets/icons/right.svg" alt="Mehr">
        </button>
        <button onclick="removeFromCart(${index})">
          <img src="./assets/icons/delete.svg" alt="Entfernen">
        </button>
      </div>
    </div>
  `;
}


