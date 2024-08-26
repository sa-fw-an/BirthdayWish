function showCake() {
    document.getElementById('cake').classList.add('visible');
    document.getElementById('celebrateButton').classList.remove('hidden');
    document.getElementById('showCakeButton').classList.add('hidden');
    const audio = document.getElementById('myAudio');
    audio.play();
}

function triggerCelebration() {
    const candleLights = document.querySelectorAll('.candle-light');
    candleLights.forEach(light => {
        light.classList.add('show');
    });

    const birthdayText = document.getElementById('birthday-text');
    birthdayText.style.opacity = '1';

    const wishingText = document.getElementById('wishing-text');
    wishingText.classList.add('visible');

    const leftLight = document.getElementById('left-light');
    const rightLight = document.getElementById('right-light');
    const leftGlow = document.getElementById('left-glow');
    const rightGlow = document.getElementById('right-glow');

    leftLight.classList.add('visible');
    rightLight.classList.add('visible');
    leftGlow.classList.add('visible');
    rightGlow.classList.add('visible');

    generateConfetti();
    generatePops();
    setTimeout(generateHearts, 2000);

    const celebrateButton = document.getElementById('celebrateButton');
    celebrateButton.classList.add('fade-out');
    setTimeout(() => celebrateButton.remove(), 1000);
}

function generateConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confettiCount = 300;

    confettiContainer.innerHTML = '';

    for (let i = 0; i < confettiCount; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.top = Math.random() * -100 + 'px';
        confettiPiece.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        confettiPiece.style.animationDuration = `${Math.random() * 5 + 5}s`;
        confettiPiece.style.animationTimingFunction = 'ease-in-out';
        confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confettiPiece);

        setTimeout(() => confettiPiece.remove(), parseFloat(confettiPiece.style.animationDuration) * 1000);
    }
}

function generatePops() {
    const popsContainer = document.getElementById('pops');
    const popCount = 100;

    popsContainer.innerHTML = '';

    for (let i = 0; i < popCount; i++) {
        let pop = document.createElement('div');
        pop.className = 'pop';
        pop.style.left = Math.random() * 100 + 'vw';
        pop.style.top = Math.random() * -100 + 'px';
        pop.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        pop.style.animationDuration = `${Math.random() * 7 + 7}s`;
        pop.style.animationTimingFunction = 'ease-out';
        pop.style.transform = `rotate(${Math.random() * 360}deg)`;
        popsContainer.appendChild(pop);

        setTimeout(() => pop.remove(), parseFloat(pop.style.animationDuration) * 1000);
    }
}

function generateHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartsCount = 200;

    heartsContainer.innerHTML = '';

    setInterval(() => {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * -100 + 'px';

        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        heart.style.backgroundColor = randomColor;

        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        heart.style.animationTimingFunction = 'ease-in-out';
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), parseFloat(heart.style.animationDuration) * 1000);
    }, 100); 
    setTimeout(() => {
        showNextButton();
    }, 6000);
}

function goToNextPage() {
    const audio = document.getElementById('myAudio');
    sessionStorage.setItem('audioTime', audio.currentTime);
    window.location.href = 'Tree.html';
}

window.onload = function() {
    const audio = document.getElementById('myAudio');
    audio.currentTime = 0;
    audio.play();
};

function showNextButton() {
    document.getElementById("nextPageButton").classList.remove("hidden");
}