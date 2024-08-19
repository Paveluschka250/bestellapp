let deliveryFee = 5;
let orderType = 'pickup';

function render(contentId, items) {
  let contentElement = document.getElementById(contentId);
  contentElement.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
      contentElement.innerHTML += /*html*/ `
      <div class="menubox">
          <h4><strong>${items[i].name}</strong></h4>
          <p>${items[i].description}</p>
          <h4>${items[i].price.toFixed(2)} €</h4>
          <button class="shoppingcart" onclick="addToCart(${i}, '${contentId}')">In den Warenkorb</button>
      </div>
      `;
  }
}

function addToCart(index, contentId) {
  let selectedItem;
  if (contentId === "content-sushi") {
      selectedItem = mainMenu[index];
  } else if (contentId === "content-dessert") {
      selectedItem = desserts[index];
  } else if (contentId === "content-drinks") {
      selectedItem = drinks[index];
  }

  let foundItem = cart.find(item => item.name === selectedItem.name);
  if (foundItem) {
      foundItem.quantity += 1;
  } else {
      cart.push({ ...selectedItem, quantity: 1 });
  }

  renderCart();
  calculateTotal();
  updateOrderButtonVisibility();  // Sichtbarkeit der Bestellschaltfläche aktualisieren
}

function renderCart() {
  let cartElement = document.getElementById('cart');
  cartElement.innerHTML = "";

  if (cart.length === 0) {
      cartElement.innerHTML = "<h3>Ihr Warenkorb ist leer. Fügen Sie einige Gerichte hinzu!</h3>";
  } else {
      cart.forEach((item, index) => {
          cartElement.innerHTML += /*html*/ `
          <div class="cart-item">
              <p>${item.name} - €${item.price.toFixed(2)} x ${item.quantity}</p>
              <button onclick="decreaseQuantity(${index})">-</button>
              <button onclick="increaseQuantity(${index})">+</button>
              <button onclick="removeFromCart(${index})">Entfernen</button>
          </div>
          `;
      });
  }
  calculateTotal();
  updateOrderButtonVisibility();  // Sichtbarkeit der Bestellschaltfläche aktualisieren
}

function increaseQuantity(index) {
  cart[index].quantity += 1;
  renderCart();
  calculateTotal();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
  } else {
      cart.splice(index, 1);
  }
  renderCart();
  calculateTotal();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  calculateTotal();
}

function updateOrderType(type) {
  orderType = type;
  calculateTotal();
  updateSlider();
}

function updateSlider() {
  let pickup = document.getElementById('pickup');
  let delivery = document.getElementById('delivery');
  
  if (orderType === 'delivery') {
      pickup.classList.remove('selected');
      delivery.classList.add('selected');
  } else {
      pickup.classList.add('selected');
      delivery.classList.remove('selected');
  }
}

function toggleOrderType() {
  orderType = (orderType === 'pickup') ? 'delivery' : 'pickup';
  updateOrderType(orderType);
}

function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (orderType === 'delivery' && cart.length > 0) {
      total += deliveryFee;
  }

  document.getElementById('total-price').textContent = total.toFixed(2) + " €";
}

function updateOrderButtonVisibility() {
  let orderButton = document.getElementById('order-button');
  if (cart.length > 0) {
      orderButton.style.display = 'block';
  } else {
      orderButton.style.display = 'none';
  }
}

function placeOrder() {
  alert('Ihre Bestellung wurde erfolgreich aufgegeben!');
  cart = [];  // Warenkorb leeren
  renderCart();
  calculateTotal();
  updateOrderButtonVisibility();
}

function renderAll() {
  render("content-sushi", mainMenu);
  render("content-dessert", desserts);
  render("content-drinks", drinks);
  renderCart();
  calculateTotal();
  updateOrderButtonVisibility();  // Sichtbarkeit der Bestellschaltfläche beim Laden der Seite prüfen
  updateSlider();  // Schieberegler beim Laden der Seite einstellen
}