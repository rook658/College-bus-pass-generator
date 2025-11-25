
document.addEventListener("DOMContentLoaded", () => {
  // Fade in when page loads
  document.body.classList.add("opacity-100");
});

document.querySelectorAll("a").forEach(link => {
  // Apply only to internal links
  if (link.id === "submit") return;
  if (link.hostname === window.location.hostname && link.getAttribute("href") !== "#") {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Fade out current page
      document.body.classList.add("opacity-0");

      // After 400ms, navigate to next page
      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  }
});
