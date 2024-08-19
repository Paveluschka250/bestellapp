function render() {
  let maincontent = document.getElementById("content-sushi");
  maincontent.innerHTML += "";
  for (let i = 0; i < mainCourse.length; i++) {
    maincontent.innerHTML += /*html*/ `
        <p>${mainCourse[i].name}</p>
        <p>${mainCourse[i].description}</p>
        <p>${mainCourse[i].price.toFixed(2)} €</p>
    `;
  }
}
function render(contentId, items) {
  let contentElement = document.getElementById(contentId);
  contentElement.innerHTML = ""; 

  for (let i = 0; i < items.length; i++) {
    contentElement.innerHTML += /*html*/ `
        <p><strong>${items[i].name}</strong></p>
        <p>${items[i].description}</p>
        <p>${items[i].price.toFixed(2)} €</p>
    `;
  }
}

function renderAll() {
  render("content-sushi", mainMenu);
  render("content-dessert", desserts);
  render("content-drinks", drinks);
}

