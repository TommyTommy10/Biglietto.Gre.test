const audioPlayer = document.getElementById('audioPlayer');
const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
let currentSongIndex = 0;

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

document.getElementById('countdownIcon').addEventListener('click', toggleCountdown);
document.getElementById('countdownIcon').addEventListener('touchstart', toggleCountdown);

document.getElementById('musicIcon').addEventListener('click', toggleMusicPlayer);
document.getElementById('musicIcon').addEventListener('touchstart', toggleMusicPlayer);

document.getElementById('prevBtn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});
document.getElementById('prevBtn').addEventListener('touchstart', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});
document.getElementById('nextBtn').addEventListener('touchstart', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});

audioPlayer.addEventListener('ended', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
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

function
