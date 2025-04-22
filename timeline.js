document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".timeline-section");

  sections.forEach(section => {
    const title = section.querySelector("h2");
    const content = section.querySelector(".content");
    const toggleIcon = title.querySelector(".toggle-icon");

    // Initialisation
    if (section.classList.contains("collapsed")) {
      content.style.maxHeight = "0px";
      toggleIcon.textContent = "+";  // Affiche le +
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      toggleIcon.textContent = "–";  // Affiche le –
    }

    title.style.cursor = "pointer";

    title.addEventListener("click", () => {
      section.classList.toggle("collapsed");

      if (section.classList.contains("collapsed")) {
        content.style.maxHeight = "0px";
        toggleIcon.textContent = "+";  // Change le + quand la section est repliée
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        toggleIcon.textContent = "–";  // Change le – quand la section est dépliée
      }
    });
  });
});
