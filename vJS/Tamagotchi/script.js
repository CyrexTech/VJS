// Starter verdier for kjæledyrets stats
let hunger = 100; // Hvor sulten kjæledyret er, fra 0 til 100
let happiness = 100; // Hvor glad kjæledyret er, fra 0 til 100
let cleanliness = 100; // Hvor rent kjæledyret er, fra 0 til 100

// Definerer ulike tilstander kjæledyret kan være i, med tilhørende bilder
const states = {
    NORMAL: 'Assets/95c.png', // Normal tilstand
    ANGRY: 'Assets/95c-gun.png', // Sint tilstand
    DEADLY: 'Assets/95c-redeyes-gun.png', // Dødelig tilstand
    MUZZLEFLASH: 'Assets/95c-Muzzleflash.png', // Skyter tilstand
    HUNGRY: 'Assets/95c-rolling.png', // Sulten tilstand
    HAPPY: 'Assets/95c-rolling-smoking.png', // Glad tilstand
    CONTENT: 'Assets/95c-smokedup.png', // Fornøyd tilstand
};

// Setter standardbilde for kjæledyret når spillet starter
document.getElementById('justachillguy').src = states.HAPPY;

// Funksjon for å oppdatere kjæledyrets humør basert på dets stats
function updateMood() {
    const pet = document.getElementById('justachillguy');

    // Endrer bildet basert på hvor lave verdiene for hunger, happiness og cleanliness er
    if (hunger < 5 || happiness < 5 || cleanliness < 5) {
        pet.src = states.MUZZLEFLASH; // Kritisk tilstand
    } else if (hunger < 20 || happiness < 20 || cleanliness < 20) {
        pet.src = states.DEADLY; // Veldig dårlig tilstand
    } else if (hunger < 30 || happiness < 30 || cleanliness < 30) {
        pet.src = states.ANGRY; // Sint tilstand
    } else if (hunger <= 50) {
        pet.src = states.HUNGRY; // Sulten tilstand
    } else if (hunger >= 80 && happiness >= 80 && cleanliness >= 80) {
        pet.src = states.HAPPY; // Veldig glad tilstand
    } else if (hunger >= 50 && happiness >= 50 && cleanliness >= 50) {
        pet.src = states.CONTENT; // Fornøyd tilstand
    } else {
        pet.src = states.NORMAL; // Standard tilstand
    }
}

function updateStats() {
    document.getElementById('hunger-value').textContent = hunger + '%';
    document.getElementById('happiness-value').textContent = happiness + '%';
    document.getElementById('cleanliness-value').textContent = cleanliness + '%';
    
    document.getElementById('hunger-bar').style.width = hunger + '%';
    document.getElementById('happiness-bar').style.width = happiness + '%';
    document.getElementById('cleanliness-bar').style.width = cleanliness + '%';
    
    if (hunger <= 0 || happiness <= 0 || cleanliness <= 0) {
        alert('Boom! Du er død. Jeg flytter til en annen eier.');
        gameOver();
    }
    
    updateMood();
}

let gameInterval;
let isGameRunning = true;

function startGame() {
    hunger =  100;
    happiness = 100;
    cleanliness = 100;
    
    gameInterval = setInterval(() => {

        hunger = Math.max(0, hunger - 2);
        happiness = Math.max(0, happiness -1.5);
        cleanliness = Math.max(0, cleanliness - 1);
        
        updateStats();
        
        if (hunger <= 0 || happiness <= 0 || cleanliness <= 0) {
            gameOver();
            return;
        }
    }, 750); 
    
    isGameRunning = true;
}

function gameOver() {
    clearInterval(gameInterval);
    isGameRunning = false;
}

function feed() {
    if (!isGameRunning) return;
    hunger = Math.min(100, hunger + 25);
    cleanliness = Math.min(100, cleanliness - 1.25)
    updateStats();
}

function play() {
    if (!isGameRunning) return;
    happiness = Math.min(100, happiness + 25);
    hunger = Math.min(100, hunger - 1.75);
    cleanliness = Math.min(100, cleanliness - 2.5)
    updateStats();
}

function clean() {
    if (!isGameRunning) return;
    cleanliness = Math.min(100, cleanliness + 15);
    hunger = Math.min(100, hunger - 0.5);
    happiness = Math.min(100, happiness - 0.75)
    updateStats();
}
