const items = document.querySelectorAll(".accordion__item");

function toggleAccordion(item) {
  items.forEach((i) => {
    if (i !== item) {
      i.classList.remove("open");
    }
  });

  item.classList.toggle("open");
}

items.forEach((item) => {
  item.addEventListener("click", () => toggleAccordion(item));

  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toggleAccordion(item);
    }
  });
});
