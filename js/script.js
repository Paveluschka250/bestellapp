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

function renderNavigation(menu) {
  let categories = Object.keys(menu);
  let html = "";
  for (let i = 0; i < categories.length; i++) {
    html += createNavigation(categories[i]);
  }
  return html;
}

function renderMenuInfo(dishes) {
  let html = "";
  for (let i = 0; i < dishes.length; i++) {
    html += createMenuInfo(dishes[i]);
  }
  return html;
}


function formatCategoryName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function renderMenu(menu) {
  let categories = Object.keys(menu);
  let html = "";
  for (let i = 0; i < categories.length; i++) {
    let categoryName = categories[i];
    let dishes = menu[categoryName];
    html += createMenu(categoryName, dishes);
  }
  return html;
}

function openBasket() {
  let cart = document.getElementById("cart");
  cart.classList.add("open");
}

function closeBasket() {
  let cart = document.getElementById("cart");
  cart.classList.remove("open");
}
