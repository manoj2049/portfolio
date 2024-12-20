const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close-btn");

document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modal.style.display = "flex";
    modalText.textContent = e.target.closest(".card").dataset.details;
  });
});


closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("scroll", () => {
  modal.style.display = "none";
});


document.querySelectorAll(".accordion-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";
    document
      .querySelectorAll(".accordion-item .content")
      .forEach((c) => (c.style.display = "none"));
    content.style.display = isOpen ? "none" : "block";
  });
});


document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! Your message has been sent.");
});
