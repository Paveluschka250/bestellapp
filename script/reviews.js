// Beispiel-Bewertungen (kann erweitert werden)
const reviews = [
    {
      name: "Anna",
      date: "12.08.2024",
      review: "Tolles Sushi! Sehr frisch und lecker."
    },
    {
      name: "Markus",
      date: "10.08.2024",
      review: "Guter Service, aber das Essen war nur okay."
    },
    {
      name: "Sophia",
      date: "08.08.2024",
      review: "Fantastische Erfahrung, kann es nur empfehlen!"
    }
  ];
  
  // Overlay öffnen und Bewertungen anzeigen
  function openOverlayReviews() {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = ""; // Alte Inhalte löschen
  
    // Bewertungen hinzufügen
    reviews.forEach(review => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
  
      reviewItem.innerHTML = `
        <h3>${review.name}</h3>
        <p><em>${review.date}</em></p>
        <p>${review.review}</p>
      `;
  
      reviewList.appendChild(reviewItem);
    });
  
    // Overlay anzeigen
    document.getElementById("review-overlay").style.display = "flex";
  }
  
  // Overlay schließen
  function closeReviewOverlay() {
    document.getElementById("review-overlay").style.display = "none";
  }
  