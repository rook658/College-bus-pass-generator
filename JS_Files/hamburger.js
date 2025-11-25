document.addEventListener("DOMContentLoaded",()=>{
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});
  const currentPage = window.location.pathname.split("/").pop();

  // Function to highlight all matching links (desktop + mobile)
  function highlightActiveLinks() {
    const allLinks = document.querySelectorAll("nav a, #mobile-menu a");

    allLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("border-b-2", "border-green-700", "text-green-700", "font-semibold");
      } else {
        link.classList.remove("border-b-2", "border-green-700", "font-semibold");
      }
    });
  }

  // Highlight once immediately (for desktop)
  highlightActiveLinks();

  menuBtn?.addEventListener("click", () => {
    // Small timeout ensures DOM visibility updates before applying highlight
    setTimeout(highlightActiveLinks, 100);
  });
});