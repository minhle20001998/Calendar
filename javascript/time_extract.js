const months = {
    "January": 0,
    "February": 1,
    "march": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11
};


function extract_time(target) {
    const day = target.textContent;
    // console.log("day: "+ day);
    const month = months[document.querySelector('#month').textContent];

    //
    const year = document.querySelector('#full_year').textContent;


    return {
        "day": day,
        "month": month,
        "year": year
    }
}