// ✅ Auto-initialize all custom date pickers on the page
  document.querySelectorAll(".custom-date-picker").forEach((picker) => {
    const input = picker.querySelector(".date-input");
    const display = picker.querySelector(".date-display");
    const icon = picker.querySelector("img");

    // Format helper
    const formatDate = (date) => {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    };

    // Initialize display
    if (input.value) display.textContent = formatDate(input.value);

    // Open picker when clicking anywhere inside
    picker.addEventListener("click", () => input.showPicker());

    // Update display on change
    input.addEventListener("change", () => {
      display.textContent = formatDate(input.value);
    });
  });