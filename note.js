function displayNote() {
    const notes = document.querySelector(`.notes`);
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        const raw_data = JSON.parse(localStorage.getItem(key));
        // console.log(raw_data.date);
        const data = {
            "title": key,
            "date": raw_data.date,
            "note": raw_data.note
        }
        notes.appendChild(generateNote(data))
    });
}

function generateNote(data) {
    const note = document.createElement("div");
    note.classList.add('note');
    note.setAttribute("id", data.title);
    note.appendChild(createNodeHeader(data));
    note.appendChild(createNodeContent(data));
    return note;
}

function createNodeHeader(data) {
    const nodeHeader = document.createElement("div");
    nodeHeader.classList.add('note_header');
    // left
    const leftHeader = createLeftHeader(data);
    //right
    const rightHeader = createRightHeader(data);
    //append
    nodeHeader.appendChild(leftHeader);
    nodeHeader.appendChild(rightHeader);
    return nodeHeader;
}

function createNodeContent(data) {
    const nodeContent = document.createElement("div");
    nodeContent.classList.add('note_content');
    //paragraph
    const p = document.createElement("p");
    // console.log("-------------");
    // console.log(data);
    p.textContent = data.note;
    nodeContent.appendChild(p);
    return nodeContent;
}

function createLeftHeader(data) {
    const leftHeader = document.createElement("div");
    leftHeader.classList.add('left_side');
    // title
    const title = document.createElement("div");
    title.setAttribute('id', 'note_title');
    title.textContent = data.title;
    //date
    const date = document.createElement("div");
    date.setAttribute('id', 'note_date');
    date.textContent = data.date;
    //append
    leftHeader.appendChild(title);
    leftHeader.appendChild(date);

    return leftHeader;

}

function createRightHeader(data) {
    const rightHeader = document.createElement("div");
    rightHeader.classList.add('right_side');
    //update
    const update = document.createElement("div");
    update.classList.add('icon_detail');
    update.setAttribute('id', data.title);
    update.innerHTML = '<i class="far fa-edit edit_icon"></i>';
    //set time
    const setTime = document.createElement("div");
    setTime.classList.add('icon_detail');
    setTime.setAttribute('id', data.title);
    setTime.innerHTML = ` <i class="fas fa-stopwatch watch_icon"></i>`;
    //delete
    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('icon_detail');
    deleteDiv.setAttribute('id', data.title);
    deleteDiv.innerHTML = '<i class="far fa-trash-alt trash_icon"></i>';

    rightHeader.appendChild(update);
    rightHeader.appendChild(setTime);
    rightHeader.appendChild(deleteDiv);

    return rightHeader;
}