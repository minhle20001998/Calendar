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

    document.querySelector('.date p').textContent = (date).toDateString().split(" ")[3];

    let days = "";

    for (let i = firstDayIndex; i > 0; i--) {
        days += `<div class = "prev-date">${prevLastDay - i + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="day today">${i}</div>`

        } else {
            days += `<div class = "day">${i}</div>`
        }
        monthDays.innerHTML = days;
    }

    for (let i = 1; i <= nextDays; i++) {
        days += `<div class = "next-date">${i}</div>`
        monthDays.innerHTML = days;
    }

    checkIfNoted();
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

    // displayNote();
}

function getDate(element) {
    let elementDay = element.textContent;
    if (elementDay.length == 1) {
        elementDay = "0" + elementDay;
    }
    const month = document.querySelector('#month').textContent.substr(0, 3);
    const year = document.querySelector('#full_year').textContent;
    return {
        "elementDay": elementDay,
        "month": month,
        "year": year
    }
};

function checkIfNoted() {
    const allDays = document.querySelectorAll(".day");
    const keys = Object.keys(localStorage);
    if (keys.length != 0) {
        keys.forEach(key => {
            const raw_data = JSON.parse(localStorage.getItem(key));
            const date_array = raw_data.date.split(" ");
            allDays.forEach(element => {
                element.addEventListener('click', handleDaysClick);
                const gd = getDate(element);
                if (date_array[1] === gd.month && date_array[2] === gd.elementDay
                    && date_array[3] === gd.year) {

                    element.classList.add('noted');
                    element.innerHTML = element.innerHTML + `<i class="far fa-clock note_icon"></i>`;
                }
            });
        })
    } else {
        allDays.forEach(element => {
            element.addEventListener('click', handleDaysClick);
        })
    }

}



function reRender(purpose) {
    if (purpose == "first") {
        // renderCalendar();
        removeNote();
    } else if (purpose == "cont") {
        renderCalendar();
        displayNote(getDate(current));
    }
}












