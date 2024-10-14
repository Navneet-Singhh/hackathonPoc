// script.js
document.getElementById("explore-button").addEventListener("click", () => {
    // Scroll smoothly to the video section
    document.getElementById("video-section").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("games-link").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    // Activate and scroll to the game cards section
    document.getElementById("game-cards").classList.add("active");
    document.getElementById("game-cards").scrollIntoView({ behavior: "smooth" });
  });
  
const footer = document.getElementById('footer');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    footer.classList.add('active'); // Show footer on scroll down
  } else {
    footer.classList.remove('active'); // Hide footer on scroll up
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scrolling
});
function showUnavailableMessage() {
    alert("This game is not available.");
}
