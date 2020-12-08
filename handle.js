let target = null;

function handleDaysClick(event) {
    target = event.currentTarget;
    console.log(target);
    const edit_form = document.querySelector('.edit_form');
    displayEdit(edit_form);
}

function handleSubmit(event) {
    const target_date = extract_time(target);
    console.log(target_date);
    const clickDate = new Date(target_date.year, target_date.month, parseInt(target_date.day));
    console.log("date-----------");
    console.log(clickDate.toDateString);

    const title = document.querySelector('.name_input').value;
    // console.log(title);
    // console.log(title);
    const note = document.querySelector('#content').value;
    if (validateInput(title, note)) {
        localStorage.setItem(title, JSON.stringify({
            "date": clickDate.toDateString(),
            "note": note
        }));
        exitForm();
    } else {
        console.log("invalid");

    }
}

function exitForm() {
    const edit_form = document.querySelector('.edit_form');
    const name_input = document.querySelector('.name_input');
    const content_input = document.querySelector('#content');
    name_input.value = "";
    content_input.value = "";
    exitButton('remove');
    submitButton('remove');
    edit_form.style.display = 'none';
}