function countdown() {
    const nextBirthday = new Date(new Date().getFullYear(), 8, 30); // Set the date to this year's birthday (September is month 8 in JavaScript)
    const now = new Date();
    if (now > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1); // If the birthday has passed this year, set it to next year
    }
    const diff = nextBirthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = `${days} giorni, ${hours} ore, ${minutes} minuti, ${seconds} secondi`;
}

countdown();
setInterval(countdown, 1000); // Update every second
