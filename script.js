const audioPlayer = document.getElementById('audioPlayer');
const songs = [
    "https://github.com/TommyTommy10/Biglietto.Gre.test/raw/main/30%C2%B0",
    "https://github.com/TommyTommy10/Biglietto.Gre.test/raw/main/Cupido",
    "https://github.com/TommyTommy10/Biglietto.Gre.test/raw/main/Sfera%2520Ebbasta%252C%2520Marracash%2520-%252015%2520Piani%2520%2528Visual%2529.mp3"
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
    const nextBirthday = new Date(new Date().getFullYear(),
