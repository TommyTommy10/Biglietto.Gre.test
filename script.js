function countdown() {
    const nextBirthday = new Date(new Date().getFullYear(), 8, 9); // Set the date to this year's birthday (September is month 8 in JavaScript)
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

countdown();
setInterval(countdown, 1000); // Update every second

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
            c.y += (Math.cos(c.d) + 1 + c.r / 2) / 2;
            c.x += Math.sin(c.d);
            c.tilt = Math.sin(c.tiltAngle - i / 3) * 15;

            if (c.y > canvas.height) {
                confetti[i] = {
                    x: Math.random() * canvas.width,
                    y: -10,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: c.tilt,
                    tiltAngleIncremental: c.tiltAngleIncremental,
                    tiltAngle: c.tiltAngle
                };
            }

            ctx.beginPath();
            ctx.lineWidth = c.r / 2;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
            ctx.stroke();
        });
    }

    function updateConfetti() {
        drawConfetti();
        requestAnimationFrame(updateConfetti);
    }

    updateConfetti();
}

if (new Date().getMonth() === 8 && new Date().getDate() === 9) {
    startConfetti();
}
