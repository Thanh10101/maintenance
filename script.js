function checkAdmin(isAdmin) {
    isAdmin = false;
    return isAdmin;
}

function maintainpgage() {
    if (checkAdmin()) {
        console.log("admmin");
    } else {
        window.location.href = 'maintenance.html';
    }
}
setTimeout("maintainpgage()", 2000);
