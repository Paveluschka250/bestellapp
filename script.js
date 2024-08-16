let mainCourse = [
  {
    name: "Sake Nigiri",
    description: "Lachs auf Reis, serviert mit Sojasauce und Wasabi",
    price: 4.50,
  },
  {
    name: "Maguro Sashimi",
    description: "Frische Thunfischscheiben, ohne Reis, mit Wasabi und Sojasauce",
    price: 9.90,
  },
  {
    name: "Ebi Tempura",
    description: "Knusprig frittierte Garnelen im Tempura-Teig",
    price: 7.90,
  },
  {
    name: "Unagi Don",
    description: "Gegrillter Aal auf einer Schale Reis mit Unagi-Sauce",
    price: 12.50,
  },
  {
    name: "California Roll",
    description: "Rolle mit Krabbenfleisch, Avocado und Gurke, ummantelt mit Sesam",
    price: 6.80,
  },
  {
    name: "Spicy Tuna Roll",
    description: "Scharfe Thunfischrolle mit würziger Mayonnaise und Chili",
    price: 7.20,
  },
  {
    name: "Vegetarische Maki",
    description: "Rolle mit Gurke, Avocado, Karotte und Seetang",
    price: 5.50,
  },
  {
    name: "Sake Don",
    description: "Frische Lachsscheiben auf einer Schale Sushi-Reis",
    price: 10.90,
  },
  {
    name: "Dragon Roll",
    description: "Rolle mit Garnelen-Tempura, Avocado und Unagi-Sauce",
    price: 8.90,
  },
  {
    name: "Tekka Maki",
    description: "Thunfischrolle, klassisch und einfach",
    price: 4.20,
  },
];

function render() {
  let maincontent = document.getElementById("content");
  maincontent.innerHTML += "";
  for (let i = 0; i < mainCourse.length; i++) {
    maincontent.innerHTML += /*html*/`
        <p>${mainCourse[i].name}</p>
        <p>${mainCourse[i].description}</p>
        <p>${mainCourse[i].price.toFixed(2)} €</p>
    `
  }
}
