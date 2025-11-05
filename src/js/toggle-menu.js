// Define all menu groups (you can add more later easily)
const menuGroups = [
  {
    openBtn: ".menu-open",
    closeBtn: ".menu-close",
    sidebar: ".sidebar",
    overlay: ".overlay",
  },
  {
    openBtn: ".menu-open-two",
    closeBtn: ".menu-close-two",
    sidebar: ".sidebar-two",
    overlay: ".overlay-two",
  },
];

// Reusable handler function
menuGroups.forEach((group) => {
  const openBtn = document.querySelector(group.openBtn);
  const closeBtn = document.querySelector(group.closeBtn);
  const sidebar = document.querySelector(group.sidebar);
  const overlay = document.querySelector(group.overlay);

  // Skip if elements are missing
  if (!openBtn || !closeBtn || !sidebar || !overlay) return;

  function openMenu() {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100", "pointer-events-auto");
    document.body.classList.add("overflow-hidden");
  }

  function closeMenu() {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100", "pointer-events-auto");
    document.body.classList.remove("overflow-hidden");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
