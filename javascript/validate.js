function validateInput(title, note) {
    let result = false;
    if (title != null, title != "", title.length <= 30, titleCheck(title)) {
        result = true;
    } else {
        return false;
    }
    if (note != null, note != "") {
        result = true;
    } else {
        return false;
    }
    return result;
}
function titleCheck(title) {
    if (localStorage.getItem(title)) {
        return false;
    } else {
        return true;
    }
}