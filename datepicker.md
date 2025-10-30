<divclass="relative inline-block">

    `<!-- Hidden toggle -->`

    <input

    type="checkbox"

    id="dateDropdown"

    class="dropdown-toggle hidden peer"

    />

    `<!-- Label (acts as toggle button) -->`

    <label

    for="dateDropdown"

    class="flex items-center justify-center hover:bg-brand-light w-[27px] h-[27px] text-xs text-brand-dark cursor-pointer select-none rounded-sm"

    >

    <img

    src="./assets/svg/calendar.svg"

    alt="calendar"

    class="w-[14px] h-[14px]"

    />

    `</label>`

    `<!-- Dropdown -->`

    <div

    class="dropdown-menu hidden absolute right-0 mt-3 bg-white border border-brand-light rounded-lg [box-shadow:2px_2px_8px_rgba(43,45,65,0.08)] z-10 overflow-hidden min-w-[275px] p-[15px]"

    >

    <divclass="">

    `<!-- Header -->`

    <divclass="flex items-center justify-between mb-4">

    <button

    id="prevMonth"

    class="text-gray-500 hover:text-brand-dark cursor-pointer"

    >

    <svg

    xmlns="http://www.w3.org/2000/svg"

    width="4.326"

    height="7.006"

    viewBox="0 0 4.326 7.006"

    class="w-[10px] h-[10px]"

    >

    <path

    id="Path_chevron-left"

    data-name="Path / chevron-left"

    d="M4.326.829,1.652,3.5l2.674,2.68L3.5,7.006,0,3.5,3.5,0Z"

    fill="#2b2d41"

    />

    `</svg>`

    `</button>`

    <h2

    id="monthYear"

    class="font-bold text-brand-dark text-xs"

    >`</h2>`

    <button

    id="nextMonth"

    class="text-gray-500 hover:text-brand-dark cursor-pointer"

    >

    <svg

    xmlns="http://www.w3.org/2000/svg"

    width="4.326"

    height="7.006"

    viewBox="0 0 4.326 7.006"

    class="w-[10px] h-[10px]"

    >

    <path

    id="Path_chevron-left"

    data-name="Path / chevron-left"

    d="M0,.829,2.674,3.5,0,6.183l.823.823,3.5-3.5L.823,0Z"

    fill="#2b2d41"

    />

    `</svg>`

    `</button>`

    `</div>`

    `<!-- Weekdays -->`

    <div

    class="grid grid-cols-7 text-center text-[10px] font-bold text-brand-dark mb-2"

    >

    `<div>`MO`</div>`

    `<div>`TU`</div>`

    `<div>`WE`</div>`

    `<div>`TH`</div>`

    `<div>`FR`</div>`

    `<div>`SA`</div>`

    `<div>`SU`</div>`

    `</div>`

    `<!-- Days -->`

    <div

    id="calendarDays"

    class="grid grid-cols-7 text-center gap-2 text-[10px]"

    >`</div>`

    `</div>`

    `</div>`

    `</div>`
