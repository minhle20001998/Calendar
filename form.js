function displayEdit(edit_form) {
    const edit_header = document.querySelector('.edit_header');
    const edit_table = document.querySelector('.edit_table');
    const exit_button = exitButton('create');
    const submit_box = submitButton('create');

    insertAfter(edit_header, exit_button);
    edit_table.appendChild(submit_box);
    edit_form.style.display = 'flex';

}

function exitButton(purpose) {
    const exit_button = document.createElement('div');
    if (purpose == 'create') {
        return createExit(exit_button);
    }
    else if (purpose = 'remove') {
        removeExit();

    }
}

function createExit(exit_button) {
    exit_button.classList.add('exit');
    exit_button.innerHTML = `<i class="far fa-times-circle"></i>`;
    exit_button.addEventListener('click', exitForm);
    return exit_button;
}

function removeExit() {
    const exit_delete = document.querySelector('.exit');
    exit_delete.remove();
}

function submitButton(purpose) {
    const submit_box = document.createElement('div');

    if (purpose == 'create') {
        return createSubmit(submit_box);
    }
    else if (purpose == 'remove') {
        removeSubmit();
    }
}

function createSubmit(submit_box) {
    const submit_button = document.createElement('button');
    submit_box.classList.add('submit_box');
    submit_button.classList.add('submit');
    submit_button.textContent = "Submit";

    submit_button.addEventListener('click', handleSubmit);

    submit_box.appendChild(submit_button);

    return submit_box;
}

function removeSubmit() {
    const submit_box = document.querySelector('.submit_box');
    submit_box.remove();
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}