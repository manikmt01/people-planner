const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();
let selectedDate = null; // Track selected date

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = (firstDay.getDay() + 6) % 7; // Monday start
  const prevLastDay = new Date(year, month, 0).getDate();
  const totalDays = lastDay.getDate();

  monthYear.textContent = `${firstDay.toLocaleString("default", { month: "long" })} ${year}`;
  calendarDays.innerHTML = "";

  // 🩶 Previous month's tail days
  for (let i = 0; i < startDay; i++) {
    const dateNum = prevLastDay - startDay + i + 1;
    const prevDay = document.createElement("div");
    prevDay.textContent = dateNum;
    prevDay.className =
      "w-[30px] h-[30px] flex justify-center items-center rounded-[5px] border border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-dark cursor-pointer";
    prevDay.addEventListener("click", () => {
      currentDate = new Date(year, month - 1, dateNum);
      renderCalendar();
    });
    calendarDays.appendChild(prevDay);
  }

  // 🟦 Current month's days
  for (let day = 1; day <= totalDays; day++) {
    const dayEl = document.createElement("div");
    dayEl.textContent = day;
    dayEl.className =
      "w-[30px] h-[30px] flex justify-center items-center rounded-[5px] border border-brand-light text-[#2B2D41] hover:bg-[#2B2D41] hover:text-white cursor-pointer transition";

    const today = new Date();

    // Highlight today or selected date with border-brand-dark
    if (
      (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) ||
      (selectedDate && day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear())
    ) {
      dayEl.classList.remove("border-brand-light");
      dayEl.classList.add("border-brand-dark", "font-bold");
    }

    dayEl.addEventListener("click", () => {
      selectedDate = new Date(year, month, day);
      renderCalendar(); // Re-render to apply selected style
    });

    calendarDays.appendChild(dayEl);
  }

  // 🩶 Next month's starting days
  const filledCells = startDay + totalDays;
  let remaining = 35 - filledCells; // 5 weeks default
  if (remaining < 0) remaining = 7 - (filledCells % 7);

  for (let i = 1; i <= remaining; i++) {
    const nextDay = document.createElement("div");
    nextDay.textContent = i;
    nextDay.className =
      "w-[30px] h-[30px] flex justify-center items-center rounded-[5px] border border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-dark cursor-pointer";
    nextDay.addEventListener("click", () => {
      currentDate = new Date(year, month + 1, i);
      renderCalendar();
    });
    calendarDays.appendChild(nextDay);
  }
}

// Navigation buttons
prevMonth.addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  renderCalendar();
});

renderCalendar();
