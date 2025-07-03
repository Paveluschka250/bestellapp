let sushiRestaurant = [
  {
    name: "Sushi Palace",
    description:
      "Frisches Sushi und japanische Spezialitäten – schnell geliefert.",
    rating: 4.6,
    reviewsCount: 532,
    comments: [
      { user: "Anna", text: "Immer pünktlich geliefert und super lecker!" },
      { user: "Tom", text: "Top Qualität und freundlicher Service." },
      { user: "Lisa", text: "Lieblings-Sushiladen in der Stadt!" },
    ],
    deliveryTime: "30–45 Minuten",
    minOrder: 15.0,
    deliveryFee: 2.5,
    phone: "+49 123 456789",
    logo: "assets/img/logo/restaurant-logo.png",
    cover: "assets/img/picture/cover.jpg",
    menu: {
      vorspeisen: [
        {
          name: "Edamame",
          description: "Gedämpfte Sojabohnen mit Meersalz.",
          price: 3.5,
          image: "assets/img/foods/edamame.jpg",
        },
        {
          name: "Gyoza",
          description: "Knusprige Teigtaschen mit Gemüsefüllung.",
          price: 4.9,
          image: "assets/img/foods/gyoza.jpg",
        },
        {
          name: "Wakame-Salat",
          description: "Seetangsalat mit Sesam.",
          price: 3.2,
          image: "assets/img/foods/wakame.jpg",
        },
      ],
      suppen: [
        {
          name: "Miso Suppe",
          description: "Traditionelle Miso-Suppe mit Tofu, Wakame und Lauch.",
          price: 2.5,
          image: "assets/img/foods/miso-suppe.jpg",
        },
        {
          name: "Ramen Suppe",
          description: "Würzige Brühe mit Nudeln, Ei, Algen und Gemüse.",
          price: 8.9,
          image: "assets/img/foods/ramen.jpg",
        },
        {
          name: "Udon Suppe",
          description: "Udon-Nudeln in klarer Brühe mit Frühlingszwiebeln.",
          price: 7.9,
          image: "assets/img/foods/udon.jpg",
        },
      ],
      sushi: [
        {
          name: "Lachs Nigiri",
          description: "Frisches Lachsfilet auf Reis mit Wasabi.",
          price: 2.5,
          image: "assets/img/foods/lachs-nigiri.jpg",
        },
        {
          name: "California Roll",
          description: "Inside-Out Rolle mit Surimi, Avocado und Gurke.",
          price: 6.9,
          image: "assets/img/foods/california-roll.jpg",
        },
        {
          name: "Thunfisch Maki",
          description: "Kleine Maki-Rollen mit Thunfischfüllung.",
          price: 4.5,
          image: "assets/img/foods/thunfisch-maki.jpg",
        },
        {
          name: "Ebi Tempura Roll",
          description: "Rolle mit knusprigen Garnelen und Avocado.",
          price: 7.2,
          image: "assets/img/foods/ebi-tempura-roll.jpg",
        },
        {
          name: "Veggie Roll",
          description: "Rolle mit Gurke, Avocado und Paprika.",
          price: 5.2,
          image: "assets/img/foods/veggie-roll.jpg",
        },
      ],
      sashimi: [
        {
          name: "Lachs Sashimi",
          description: "Dünn geschnittenes frisches Lachsfilet.",
          price: 6.5,
          image: "assets/img/foods/lachs-sashimi.jpg",
        },
        {
          name: "Thunfisch Sashimi",
          description: "Roher Thunfisch in Sashimi-Schnitt.",
          price: 7.5,
          image: "assets/img/foods/thunfisch-sashimi.jpg",
        },
      ],
      hauptgerichte: [
        {
          name: "Chicken Teriyaki",
          description: "Gegrilltes Hähnchen mit Teriyaki-Sauce und Reis.",
          price: 9.5,
          image: "assets/img/foods/chicken-teriyaki.jpg",
        },
        {
          name: "Lachs Bento",
          description: "Lachsfilet mit Reis, Gemüse und Miso-Suppe.",
          price: 11.9,
          image: "assets/img/foods/lachs-bento.jpg",
        },
        {
          name: "Tofu Don",
          description: "Gebratener Tofu auf Reis mit Gemüse.",
          price: 8.2,
          image: "assets/img/foods/tofu-don.jpg",
        },
      ],
      tempura: [
        {
          name: "Gemüse Tempura",
          description: "Frittierte Gemüsestücke im Tempura-Teig.",
          price: 4.9,
          image: "assets/img/foods/gemuesetempura.jpg",
        },
        {
          name: "Garnelen Tempura",
          description: "Knusprig frittierte Garnelen mit Dip.",
          price: 6.5,
          image: "assets/img/foods/ebi-tempura.jpg",
        },
      ],
      dessert: [
        {
          name: "Mochi Eis",
          description: "Japanisches Reiskuchen-Eis in verschiedenen Sorten.",
          price: 3.9,
          image: "assets/img/foods/mochi-eis.jpg",
        },
        {
          name: "Sesambällchen",
          description: "Frittierte Bällchen mit süßer Bohnenpaste.",
          price: 2.9,
          image: "assets/img/foods/sesamballchen.jpg",
        },
        {
          name: "Matcha Tiramisu",
          description: "Tiramisu mit feinem Matcha-Grüntee.",
          price: 4.5,
          image: "assets/img/foods/matcha-tiramisu.jpg",
        },
      ],
      getraenke: [
        {
          name: "Grüner Tee",
          description: "Traditioneller japanischer grüner Tee.",
          price: 2.0,
          image: "assets/img/foods/gruner-tee.jpg",
        },
        {
          name: "Ramune Limonade",
          description: "Japanische Kult-Limo mit Kugelverschluss.",
          price: 3.5,
          image: "assets/img/foods/ramune.jpg",
        },
        {
          name: "Mineralwasser",
          description: "Stilles Mineralwasser, 0,5l.",
          price: 1.5,
          image: "assets/img/foods/mineralwasser.jpg",
        },
        {
          name: "Sake",
          description: "Japanischer Reiswein – warm oder kalt serviert.",
          price: 4.5,
          image: "assets/img/foods/sake.jpg",
        },
        {
          name: "Pflaumenwein",
          description: "Süßer japanischer Umeshu Pflaumenwein.",
          price: 4.9,
          image: "assets/img/foods/umeshu.jpg",
        },
      ],
    },
  },
];
