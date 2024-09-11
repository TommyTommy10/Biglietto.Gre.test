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

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        startConfetti();
    }
}

document.getElementById('countdownIcon').addEventListener('click', function() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement.style.display === 'none') {
        countdownElement.style.display = 'block';
        countdown();
        setInterval(countdown, 1000); // Update every second
    } else {
        countdownElement.style.display = 'none';
    }
});

document.getElementById('musicIcon').addEventListener('click', function() {
    const musicPlayer = document.getElementById('musicPlayer');
    if (musicPlayer.style.display === 'none') {
        musicPlayer.style.display = 'block';
    } else {
        musicPlayer.style.display = 'none';
    }
});

function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiCount = 300;
    const confetti = [];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * confettiCount,
            color: `h
