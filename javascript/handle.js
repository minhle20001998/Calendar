let target = null;

function handleDaysClick(event) {
    target = event.currentTarget;
    target.classList.add('selected');
    if (current != null) {
        current.classList.remove('selected');
    }
    current = target;
    //set current target to be selected in DOM
    const edit_form = document.querySelector('.edit_form');
    const note_date = getDate(current);
    const add_note = document.querySelector('.add_note');
    const add_note_clone = add_note.cloneNode(true);
    add_note.parentNode.replaceChild(add_note_clone, add_note);
    add_note_clone.addEventListener('click',
        () => {
            displayEdit(edit_form)
            console.log("aaa");
        }
    )
    displayFooter(note_date);
    displayNote(note_date);
}


function handleSubmit(event) {
    const target_date = extract_time(current);
    const clickDate = new Date(target_date.year, target_date.month, parseInt(target_date.day));

    const title = document.querySelector('.name_input').value;
    const note = document.querySelector('#content').value;
    if (validateInput(title, note)) {
        localStorage.setItem(title, JSON.stringify({
            "date": clickDate.toDateString(),
            "note": note
        }));
        reRender("cont");
        exitForm();
    } else {

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



function handleDelete(event) {
    const target = event.currentTarget;
    if (confirm("Sure want to remove ???")) {
        localStorage.removeItem(target.id);
        reRender("cont");
    } else {
        //do nothing
    }
}