const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    const firstDayIndex = date.getDay();
    const monthDays = document.querySelector(`.days`);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const months = [
        "January",
        "February",
        "march",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.querySelector(".date h1").textContent = months[date.getMonth()];

    document.querySelector('.date p').textContent = date.toDateString();

    let days = "";

    for (let i = firstDayIndex; i > 0; i--) {
        // console.log(firstDayIndex);
        days += `<div class = "prev-date">${prevLastDay - i + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`

        } else {
            days += `<div class = "day">${i}</div>`
        }
        monthDays.innerHTML = days;
    }

    for (let i = 1; i <= nextDays; i++) {
        days += `<div class = "next-date">${i}</div>`
        monthDays.innerHTML = days;
    }
}



main();
function main() {
    renderCalendar();
    const prev = document.querySelector('.prev')
    prev.addEventListener('click', () => {

        date.setMonth(date.getMonth() - 1);
        renderCalendar();

    })
    const next = document.querySelector('.next')
    next.addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();

    })
    const days = document.querySelectorAll(".day");
    days.forEach(element => {
        element.addEventListener('click', handleDaysClick);
    });

}


function handleDaysClick(event) {
    const target = event.currentTarget;
    console.log(target);
}









