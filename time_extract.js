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
    const fullDate = document.querySelector('#full_date').textContent;
    console.log(fullDate);
    const yearArray = fullDate.split(" ");
    //
    const year = yearArray[yearArray.length - 1];

    return {
        "day": day,
        "month": month,
        "year": year
    }
}