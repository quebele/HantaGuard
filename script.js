document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-q");
  const icon = button.querySelector("span");

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    icon.textContent = isOpen ? "–" : "+";
  });
});
