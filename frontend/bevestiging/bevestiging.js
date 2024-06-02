openBevestiging();

function openBevestiging() {
    bevestiging.classList.add("open-bevestiging");
}

function closeBevestiging() {
    bevestiging.classList.remove("open-bevestiging");
    sessionStorage.clear();
    window.location.href="../menu/menu.html"
    
}