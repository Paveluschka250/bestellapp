// Der Code wird ausgeführt, sobald das gesamte HTML-Dokument geladen ist.
document.addEventListener(
  "DOMContentLoaded", // Dieses Event tritt ein, wenn die gesamte HTML-Seite geladen ist.
  function () { 
    // Diese Funktion wird ausgeführt, wenn die Seite vollständig geladen ist.
    
    const img = document.getElementById("like-icon"); 
    // Speichert das HTML-Element mit der ID "like-icon" in der Variablen 'img'.

    if (!localStorage.getItem("icon")) {
      // Prüft, ob im lokalen Speicher des Browsers ("localStorage") ein Eintrag namens "icon" existiert.
      // Wenn kein Eintrag existiert (d.h. der Benutzer hat noch nie auf den Like-Button geklickt), wird der Code in diesem Block ausgeführt.
      
      img.src = "./assets/icons/like-false.svg";
      // Setzt das Bild der "like-icon" auf das "Nicht-geliked"-Icon (like-false.svg).
    } else {
      img.src = localStorage.getItem("icon");
      // Wenn ein Eintrag im lokalen Speicher vorhanden ist, wird das Bild der "like-icon" auf das gespeicherte Bild gesetzt.
    }
  },
  false // Das Event wird in der Erfassungsphase (capturing phase) nicht ausgeführt.
);

function toggleLike() {
  // Diese Funktion wird aufgerufen, wenn der Benutzer auf den Like-Button klickt.

  const img = document.getElementById("like-icon");
  // Holt sich wieder das Bild-Element mit der ID "like-icon" und speichert es in der Variablen 'img'.

  if (img.src.includes("like-false.svg")) {
    // Prüft, ob die aktuelle Bildquelle (img.src) das "Nicht-geliked"-Icon enthält.
    
    img.src = "./assets/icons/like-true.svg";
    // Wenn das Bild aktuell das "Nicht-geliked"-Icon ist, ändert es die Quelle auf das "Geliked"-Icon (like-true.svg).

    localStorage.setItem("icon", "./assets/icons/like-true.svg");
    // Speichert das "Geliked"-Icon im lokalen Speicher des Browsers, damit es bei einem Seiten-Neuladen gespeichert bleibt.
  } else {
    img.src = "./assets/icons/like-false.svg";
    // Wenn das Bild aktuell das "Geliked"-Icon ist, ändert es die Quelle auf das "Nicht-geliked"-Icon (like-false.svg).

    localStorage.setItem("icon", "./assets/icons/like-false.svg");
    // Speichert das "Nicht-geliked"-Icon im lokalen Speicher des Browsers, damit es bei einem Seiten-Neuladen gespeichert bleibt.
  }
}
