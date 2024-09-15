const audioPlayer = document.getElementById('audioPlayer');
const songs = [
    "https://github.com/TommyTommy10/Biglietto.Gre.test/raw/main/30%C2%B0",
    "https://github.com/TommyTommy10/Biglietto.Gre.test/raw/main/Cupido",
    "https://github.com/TommyTommy10/Biglietto.Gre.test/raw/main/Skott%2520-%2520Overcome%2520%2528Official%2520Lyric%2520Video%2529.mp3"
];
let currentSongIndex = 0;

function updateSong() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.load();
    audioPlayer.play().catch(error => {
        console.error('Errore durante la riproduzione:', error);
    });
}

function toggleCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement.style.display === 'none') {
        countdownElement.style.display = 'block';
        countdown();
        setInterval(countdown, 1000); // Update every second
    } else {
        countdownElement.style.display = 'none';
    }
}

function toggleMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    if (musicPlayer.style.display === 'none') {
        musicPlayer.style.display = 'block';
    } else {
        musicPlayer.style.display = 'none';
    }
}

function handlePrevNext(action) {
    if (action === 'prev') {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    } else if (action === 'next') {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    updateSong();
}

document.getElementById('countdownIcon').addEventListener('click', (event) => {
    event.preventDefault();
    toggleCountdown();
});
document.getElementById('countdownIcon').addEventListener('touchend', (event) => {
    event.preventDefault();
    toggleCountdown();
});

document.getElementById('musicIcon').addEventListener('click', (event) => {
    event.preventDefault();
    toggleMusicPlayer();
});
document.getElementById('musicIcon').addEventListener('touchend', (event) => {
    event.preventDefault();
    toggleMusicPlayer();
});

document.getElementById('prevBtn').addEventListener('click', (event) => {
    event.preventDefault();
    handlePrevNext('prev');
});
document.getElementById('prevBtn').addEventListener('touchend', (event) => {
    event.preventDefault();
    handlePrevNext('prev');
});

document.getElementById('nextBtn').addEventListener('click', (event) => {
    event.preventDefault();
    handlePrevNext('next');
});
document.getElementById('nextBtn').addEventListener('touchend', (event) => {
    event.preventDefault();
    handlePrevNext('next');
});

audioPlayer.addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
});

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
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c, i) => {
            c.tiltAngle += c.tiltAngleIncremental;
            c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
            c.x += Math.sin(c.d);
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
            ctx.stroke();
        });

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
