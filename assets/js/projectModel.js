document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("modalClose");
  
  // Event delegation — works for every current AND future .project-card image
  document.addEventListener("click", function(e) {
    const clickedImg = e.target.closest(".project-card img");
    if (clickedImg) {
      modalImg.src = clickedImg.getAttribute("src");
      modalImg.alt = clickedImg.getAttribute("alt") || "";
      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // lock background scroll
    }
  });
  
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
  
  closeBtn.addEventListener("click", closeModal);
  
  // Click outside the image (on the dark overlay) closes it
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Escape key closes it too
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});