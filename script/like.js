document.addEventListener("DOMContentLoaded", () => {
  let img = document.getElementById("like-icon");
  let saved = localStorage.getItem("liked") === "true";
  img.src = saved ? "./assets/icons/like-true.svg" : "./assets/icons/like-false.svg";
});

function toggleLike() {
  let img = document.getElementById("like-icon");
  let liked = img.src.includes("like-true.svg");
  let newState = !liked;

  img.src = newState ? "./assets/icons/like-true.svg" : "./assets/icons/like-false.svg";
  localStorage.setItem("liked", newState);

  img.classList.add("clicked");
  setTimeout(() => {
    img.classList.remove("clicked");
  }, 200);
}
