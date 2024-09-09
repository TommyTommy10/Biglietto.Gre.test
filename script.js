function countdown() {
    const nextBirthday = new Date(new Date().getFullYear() + 30, 9, 2025); // Set the date to next year's birthday
    const now = new Date();
    const diff = nextBirthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('days').innerText = days;
}

countdown();
setInterval(countdown, 86400000); // Update every day
