let deliveryFee = 5;
let orderType = "pickup";

function render(contentId, items) {
  let contentElement = document.getElementById(contentId);
  contentElement.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    contentElement.innerHTML += createMenuBox(items[i], i, contentId);
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
  let foundItem = cart.find((item) => item.name === selectedItem.name);
  if (foundItem) {
    foundItem.quantity += 1;
  } else {
    cart.push({ ...selectedItem, quantity: 1 });
  }
  renderCart();
  calculateTotal();
  updateOrderButtonVisibility();
}

function renderCart() {
  let cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  if (cart.length === 0) {
    cartElement.innerHTML = /*html*/`
        <div class="cart-empty">
          <p>🛒 Ihr Warenkorb ist leer.<br>Fügen Sie einige Gerichte hinzu!</p>
        </div>
      `     
  } else {
    cart.forEach((item, index) => {
      cartElement.innerHTML += createCartItem(item, index);
    });
  }
  calculateTotal();
  updateOrderButtonVisibility();
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
  let pickup = document.getElementById("pickup");
  let delivery = document.getElementById("delivery");
  if (orderType === "delivery") {
    pickup.classList.remove("selected");
    delivery.classList.add("selected");
  } else {
    pickup.classList.add("selected");
    delivery.classList.remove("selected");
  }
}

function toggleOrderType() {
  orderType = orderType === "pickup" ? "delivery" : "pickup";
  updateOrderType(orderType);
}

function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (orderType === "delivery" && cart.length > 0) {
    total += deliveryFee;
  }
  document.getElementById("total-price").textContent = total.toFixed(2) + " €";
}

function updateOrderButtonVisibility() {
  let orderButton = document.getElementById("order-button");
  if (cart.length > 0) {
    orderButton.style.display = "block";
  } else {
    orderButton.style.display = "none";
  }
}

function placeOrder() {
  alert("Ihre Bestellung wurde erfolgreich aufgegeben!");
  cart = [];
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
  updateOrderButtonVisibility();
  updateSlider();
}

function openShoppingCart() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("shopping-cart").style.display = "none";
}

function closeShoppingcard() {
  document.getElementById("sidebar").style.display = "";
  document.getElementById("main").style.display = "";
  document.getElementById("shopping-cart").style.display = "";
}
