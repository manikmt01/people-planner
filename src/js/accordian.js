document.querySelectorAll(".card-wrapper").forEach((card) => {
    const header = card.querySelector(".card-header");
    const content = card.querySelector(".card-content");
    const shortText = card.querySelector(".card-short-text");
    const fullList = card.querySelector(".card-full-list");
    const chevron = card.querySelector(".card-chevron");

    header.addEventListener("click", () => {
      const isOpen = card.classList.toggle("card-open");

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + "px"; // smooth expand
        shortText.classList.add("hidden");                    // hide short text
        fullList.classList.remove("hidden");                  // show full list
        chevron.classList.add("rotate-180");                  // rotate chevron
      } else {
        content.style.maxHeight = "3rem";                     // collapse
        shortText.classList.remove("hidden");                // show short text
        fullList.classList.add("hidden");                     // hide full list
        chevron.classList.remove("rotate-180");               // reset chevron
      }
    });
  });