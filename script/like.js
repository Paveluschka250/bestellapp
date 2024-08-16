function toggleLike() {
    const img = document.getElementById('like-icon');
    
    // Überprüfen des aktuellen Bildpfads und Umschalten
    if (img.src.includes('like-false.svg')) {
      img.src = './assets/icons/like-true.svg';
    } else {
      img.src = './assets/icons/like-false.svg';
    }
  }