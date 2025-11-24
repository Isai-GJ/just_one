const wordCardsData = [
    ["RAMA", "CENICIENTA", "CREPE", "ISLA", "TAXI"],
    ["VELA", "CHEDDAR", "SHREK", "POSTE", "OCCIDENTAL"],
    ["VIKINGO", "ALARMA", "BAILE", "HULK", "DESIERTO"],
    ["META", "PAN", "DIABLO", "PRIMARIO", "TARZÁN"],
    ["TORNILLO", "RASTRILLO", "COMPUTADORA", "STARBUCKS", "BALÓN"],
    ["SERIE", "NIDO", "ESPECIA", "ELEFANTE", "CARNAVAL"],
    ["VENGANZA", "JEFE", "EMERGENCIA", "CRUZ", "VALS"],
    ["MAFIA", "GRANDE", "MISIL", "MICROSOFT", "ESQUÍ"],
    ["GENIO", "DRÁCULA", "LEÓN", "CALCETÍN", "VIERNES"],
    ["CÓCTEL", "MARIO", "CORCHO", "VIOLÍN", "MELOCOTÓN"],
    ["RATA", "ALICATE", "AMAZON", "TABACO", "REGLA"],
    ["HANUKKAH", "ELÁSTICO", "SARTÉN", "FLASH", "TÚNEL"],
    ["ZORRO", "POLICÍA", "SIMPSON", "RELÁMPAGO", "PERIÓDICO"],
    ["MONTAÑA", "CACAHUETE", "BOMBILLA", "JEDI", "PIMIENTO"],
    ["SOMBRERO", "TRÉBOL", "BOTÓN", "QUESO", "CHEWBACCA"],
    ["VIUDANEGRA (WIDOWMAKER)", "DOCTOR", "FRESA", "NUCLEAR", "LOTERÍA"],
    ["CEMENTERIO", "CUPIDO", "PARAGUAS", "SALTO", "RAÍZ"],
    ["TESORO", "PILOTO", "MICKEY", "ALCANTARILLA", "GALAXIA"],
    ["MITO", "FACEBOOK", "BELLOTA", "HUESO", "PUENTE"],
    ["GRÚA", "OPERACIÓN", "RAP", "MUSA", "DEFENSA"],
    ["LUZ", "SOFÁ", "MOZART", "ANILLO", "PIZZA"],
    ["CABALLERO", "PAZ", "FLOR", "SUIZA", "CALENDARIO"],
    ["JARABE", "BOSQUE", "ESCALA", "ZEUS", "CUCARACHA"],
    ["PIRATA", "VACACIONES", "DUENDE", "IMÁN", "TENEDOR"],
    ["BUFFY", "VOLCÁN", "PASIÓN", "GALLO", "ELECTRICIDAD"],
    ["PANADERO", "PERFUME", "LLAMA", "ZOMBIE", "JOKER"],
    ["VENENO", "ESTRELLA", "LOBO", "JONES", "ANIVERSARIO"],
    ["MARTILLO", "CHILE", "GUMBO", "EMPERADOR", "PAPA"],
    ["HOLLYWOOD", "MOSQUITO", "LANZA", "BOLSO", "FIN"],
    ["TABLERO", "BOMBERO", "CRISTAL", "BURRITO", "GRECIA"],
    ["ZAPATILLA", "HOJA", "PUMA", "REVOLUCIÓN", "SAHARA"],
    ["GRUTA", "FORD", "CASINO", "CARAMELO", "FUENTE"],
    ["PICAPIEDRA", "ROBOT", "COMEDIA", "LENGUAJE", "PELUQUERO"],
    ["DINOSAURIO", "AMARILLO", "SETA", "PALOMA", "PIKACHU"],
    ["TRUENO", "JARDÍN", "PINTURA", "CHOZA", "TREGUA"],
    ["MOMIA", "BATERÍA", "FERIA", "KARATE", "LORO"],
    ["OLÍMPICOS", "ESCALAR", "ABOGADO", "TOLKIEN", "RÍO"],
    ["ALFOMBRA", "PONI", "CORONA", "NUEVO", "TARANTINO"],
    ["BARBIE", "CHOCOLATE", "NIEVE", "CORBATA", "VIENTO"],
    ["PENSAMIENTO", "FRANKENSTEIN", "ESTANTERÍA", "ACENTO", "DUCHA"],
    ["ESTOFADO", "CANADÁ", "ZOOLÓGICO", "TUBO", "LIBRO"],
    ["TOALLA", "VENUS", "PULPO", "CICLO", "ÓPERA"],
    ["MARIQUITA", "MOSTAZA", "SHERLOCK", "BOTELLA", "VIRUS"],
    ["MÚSICA", "GARGANTA", "AMÉRICA", "CAFÉ", "FIEBRE"],
    ["GOOGLE", "ARCO", "MARTE", "GOLF", "BILLETE"],
    ["REGISTRO", "PLAYSTATION", "RUBIO", "IRIS", "EXTREMIDAD"],
    ["OPRAH", "NINJA", "EDREDÓN", "CAZADOR", "VEGETAL"],
    ["HORNO", "ENCHUFE", "PASCUA", "MANGUERA", "CARRIL"],
    ["MARIPOSA", "POLVO", "PORCELANA", "MERCADO", "CAPULLO"],
    ["BARBACOA", "PANDA", "SUEÑO", "MATRIMONIO", "OMBLIGO"],
    ["CARIES", "MANGA", "GREMLINS", "PÓKER", "PASTEL"],
    ["AZÚCAR", "TEATRO", "PALA", "DUNA", "EMBARAZADA"],
    ["GATO", "PALACIO", "ELECCIÓN", "MIEL", "RAMBO"],
    ["REGGAE", "ESTIÉRCOL", "LAGO", "MONO", "FARO"],
    ["VECINDARIO", "ROCA", "TIGRE", "AGUJA", "JABÓN"],
    ["PRISIÓN", "AGUJERO", "PUNK", "TARDE", "MAPA"],
    ["NÚMERO", "DECATHLON", "RON", "METAL", "ATÚN"],
    ["REY", "BALLET", "BANDA", "ALCOHOL", "LAVA"],
    ["LIENZO", "VAMPIRO", "MONOPOLY", "DIBUJOS ANIMADOS", "HOTEL"],
    ["DARWIN", "TOMATE", "PARACAÍDAS", "CAÑÓN", "BINOCULARES"],
    ["ESPEJISMO", "RAMSÉS", "HOGUERA", "CRUCE DE CAMINOS", "PRINCESA"],
    ["GUILLOTINA", "MAGO", "HOCKEY", "PLÁTANO", "FITZGERALD"],
    ["CÉSAR", "FIDEOS", "SOMBRERO", "DENTISTA", "TRIGO"],
    ["CONCHA", "SHAKESPEARE", "GIGANTE", "ESPUMA", "CUEVA"],
    ["CUCHILLO", "ALMOHADA", "ARMSTRONG", "ESPADA", "VUELO"],
    ["EXPLOSIÓN", "PINGÜINO", "CÉLULA", "GANDHI", "OASIS"],
    ["COCODRILO", "JOYAS", "METRO", "GAFAS", "PICADURA"],
    ["JACKSON", "CIGARRILLO", "PULSERA", "CLIMA", "TORRE"],
    ["TATUAJE", "SPIELBERG", "MANZANA", "SIRENA", "BOXEO"],
    ["CORAZÓN", "MOSCÚ", "PISCINA", "UNICORNIO", "NARANJA"],
    ["MELÓN", "ANCLA", "ISRAEL", "CACTUS", "TENIS"],
    ["PIMIENTA", "TRIÁNGULO", "MUÑECA", "ITALIA", "ESCENA"],
    ["POLAR", "RATÓN", "COLLAR", "GRANJA", "BÉLGICA"],
    ["FRANCIA", "LUNA", "CAFETERÍA", "MANGO", "HERRAMIENTA"],
    ["CUERDA", "AUSTRALIA", "CASTILLO", "GUARDIA", "OVEJA"],
    ["TÍTERE", "JUEGO", "VEGAS", "CAJA FUERTE", "AVIÓN"],
    ["CEREBRO", "MÁSCARA", "CONCIERTO", "TROYA", "TIBURÓN"],
    ["SOLITARIO", "PATATA", "OLA", "ESCUELA", "LEGO"],
    ["TOKIO", "TACÓN", "POLLO", "HELICÓPTERO", "CORONEL"],
    ["TRADICIÓN", "SERPIENTE", "TAZA", "PICASSO", "RELOJ"],
    ["PASTEL", "SEMENTAL", "MÉXICO", "BLANCO", "CALVO"],
    ["ORUGA", "HUMOR", "ESQUINA", "ANTÁRTIDA", "SALCHICHA"],
    ["PLÁSTICO", "RAYO", "CARTÓN", "GUITARRA", "EVEREST"],
    ["TERMINATOR", "CARTA", "ARRASTRAR", "PARAÍSO", "HUEVO"],
    ["NINTENDO", "APUESTA", "SAL", "MANUAL", "ESCARCHA"],
    ["CASA", "PADRINO", "GUERRA", "CUERDA", "VINO"],
    ["CLUB", "NAVIDAD", "MODA", "ESTACIÓN", "LÁMPARA"],
    ["RADIO", "PERA", "GLADIADOR", "SOL", "CEREAL"],
    ["BAYA", "ESTUDIO", "GÓTICO", "TITANIC", "MÁQUINA"],
    ["ENANO", "CIRCO", "ELVIS", "CORTACÉSPED", "PIEDRA"],
    ["TREN", "CAMARÓN", "HABITACIÓN", "CLEOPATRA", "VENTANA"],
    ["TANGO", "MADURO", "TEMPLO", "ARENA", "PATATAS FRITAS"],
    ["GRANADA", "RELLENO", "CEPILLO", "CERDO", "HUMANO"],
    ["ALCATRAZ", "HUMO", "AVELLANA", "DIAMANTE", "ROSA"],
    ["GODZILLA", "UNIFORME", "LLUVIA", "FUEGO", "CASCO"],
    ["BARCO", "BOLOS", "CHURCHILL", "CARNERO", "ESPÍA"],
    ["HALLOWEEN", "CHIP", "BEBÉ", "CANTINA", "PAR"],
    ["FRACASO", "HISTORIA", "CERVEZA", "DISCO", "PRESIDENTE"],
    ["ESPEJO", "BAILE DE GRADUACIÓN", "BAÑO", "FOSO", "HADA"],
    ["ESCALERA", "ÁNGEL", "LOCO", "PELO", "MATRIX"],
    ["BIGOTE", "BURBUJA", "CADENA", "STARK", "GALLETA"],
    ["AVATAR", "MOLINO", "SELVA", "MONJA", "PETARDO"],
    ["HIERRO", "BATMAN", "CANCIÓN", "NILO", "CINE"],
    ["BOMBA", "ALADDÍN", "TUBO", "CINTURÓN", "BAR"],
    ["BOCA", "CARRUSEL", "PSICÓPATA", "HIERBA", "OTOÑO"],
    ["DOPAJE", "AJO", "CUBO", "ROCKY", "LECHE"],
    ["HIELO", "FLAUTA", "CHAMPÁN", "SAFARI", "ALIEN"],
    ["BASTÓN", "MOSQUETERO", "HILO", "TULIPÁN", "IKEA"],
    ["CRUASÁN", "FANTASMA", "PAJA", "CLAVO", "POTTER"],
    ["ESPARTACO", "PELO", "TORNADO", "PIRÁMIDE", "ALIANZA"]
];

// Game State
let score = 0;
let cardsPlayed = 0;
let cardsRemaining = 13; // Initial number of cards for a full game
let currentCardIndex = 0;
let shuffledCards = [];
let highScore = 0;

const HIGH_SCORE_KEY = 'justOneHighScore';

// DOM Elements
const mainMenuScreen = document.getElementById('main-menu');
const gameScreen = document.getElementById('game-screen');
const endGameScreen = document.getElementById('end-game-screen');
const wordModeScreen = document.getElementById('word-mode-screen');
const highScoreMenuDisplay = document.getElementById('high-score-menu');
const cardFlipper = document.querySelector('.card-flipper');
const revealControls = document.getElementById('reveal-controls');
const gameControls = document.getElementById('game-controls');
const clueInputContainer = document.getElementById('clue-input-container');
const clueDisplayContainer = document.getElementById('clue-display-container');
const clueInput = document.getElementById('clue-input');
const clueDisplay = document.getElementById('clue-display');



// Audio Elements
const clickSound = new Audio('sounds/click.mp3');
const flipSound = new Audio('sounds/flip.mp3');
const failSound = new Audio('sounds/fail.mp3');
const midSound = new Audio('sounds/mid.mp3');
const topSound = new Audio('sounds/top.mp3');

const startGameBtn = document.getElementById('start-game-btn');
const wordModeBtn = document.getElementById('word-mode-btn');
const lockClueBtn = document.getElementById('lock-clue-btn');
const nextClueBtn = document.getElementById('next-clue-btn');
const wordModeEndBtn = document.getElementById('word-mode-end-btn');
const revealCardBtn = document.getElementById('reveal-card-btn');
const restartGameBtn = document.getElementById('restart-game-btn');

const scoreDisplay = document.getElementById('score-display');
const cardsRemainingDisplay = document.getElementById('cards-remaining-display');
const finalScoreDisplay = document.getElementById('final-score-display');
const scoreMessage = document.getElementById('score-message');
const highScoreEndDisplay = document.getElementById('high-score-end');

const wordElements = [];
for (let i = 1; i <= 5; i++) {
    wordElements.push(document.getElementById(`word-${i}`));
}

const successBtn = document.getElementById('success-btn');
const passBtn = document.getElementById('pass-btn');
const failureBtn = document.getElementById('failure-btn');
const endGameNowBtn = document.getElementById('end-game-now-btn');

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to load high score from localStorage
function loadHighScore() {
    const storedHighScore = localStorage.getItem(HIGH_SCORE_KEY);
    if (storedHighScore) {
        highScore = parseInt(storedHighScore, 10);
    }
    highScoreMenuDisplay.textContent = `Récord: ${highScore}`;
}

// Function to update and save high score
function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem(HIGH_SCORE_KEY, highScore);
        highScoreEndDisplay.textContent = `¡Nuevo Récord: ${highScore}!`;
    } else {
        highScoreEndDisplay.textContent = `Récord: ${highScore}`;
    }
}

// Function to initialize a new game
function initGame() {
    score = 0;
    cardsPlayed = 0;
    cardsRemaining = 13; // Reset to 13 for a new game
    currentCardIndex = 0;

    // Shuffle all available cards and pick the first 'cardsRemaining' for this game
    shuffledCards = shuffleArray([...wordCardsData]).slice(0, cardsRemaining);

    updateGameInfo();
    displayCard();

    // Reset card state for new game
    cardFlipper.classList.remove('is-flipped');
    revealControls.style.display = 'block';
    gameControls.style.display = 'none';
    showScreen(gameScreen);
}

// Function to display the current card
function displayCard() {
    if (cardsPlayed >= cardsRemaining) {
        endGame();
        return;
    }

    const currentCard = shuffledCards[currentCardIndex];
    wordElements.forEach((element, index) => {
        element.textContent = currentCard[index];
    });
    updateGameInfo();
}

// Function to update score and cards remaining display
function updateGameInfo() {
    scoreDisplay.textContent = score;
    cardsRemainingDisplay.textContent = cardsRemaining - cardsPlayed;
}

// Function to handle player choices (Success, Pass, Failure)
function handleChoice(type) {
    if (cardsPlayed >= cardsRemaining) {
        // Should not happen if displayCard() checks correctly, but good for safety
        endGame();
        return;
    }

    if (type === 'success') {
        score++;
    } else if (type === 'failure') {
        // If failure, one card is lost from the remaining opportunities
        cardsRemaining--;
    }
    // For 'pass', score remains 0 and cardsRemaining is unchanged

    cardsPlayed++;
    currentCardIndex++;

    if (cardsPlayed >= cardsRemaining) {
        endGame();
    } else {
        // Flip back the card and prepare for the next round
        flipSound.play();
        cardFlipper.classList.remove('is-flipped');
        revealControls.style.display = 'block';
        gameControls.style.display = 'none';
        // Use a timeout to allow the flip back animation to be seen before the content changes
        setTimeout(displayCard, 300); // 300ms is half of the animation duration
    }
}

// Function to end the game and show results
function endGame() {
    updateHighScore();
    loadHighScore(); // Update high score on main menu for next time

    finalScoreDisplay.textContent = score;
    let message = '';
    if (score === 13) {
        message = "¡Puntuación perfecta! ¿Puedes hacerlo de nuevo?";
        topSound.play();
    } else if (score === 12) {
        message = "¡Increíble! ¡Tus amigos deben estar impresionados!";
        topSound.play();
    } else if (score === 11) {
        message = "¡Impresionante! ¡Esa es una puntuación digna de celebrar!";
        topSound.play();
    } else if (score >= 9 && score <= 10) {
        message = "¡Vaya, nada mal!";
        midSound.play();
    } else if (score >= 7 && score <= 8) {
        message = "Estás en la media. ¿Puedes hacerlo mejor?";
        midSound.play();
    } else if (score >= 4 && score <= 6) {
        message = "Es un buen comienzo. ¡Inténtalo de nuevo!";
        failSound.play();
    } else { // 0-3
        message = "Inténtalo de nuevo, y de nuevo, y de nuevo.";
        failSound.play();
    }
    scoreMessage.textContent = message;

    showScreen(endGameScreen);
}

// Function to switch between screens
function showScreen(screenToShow) {
    mainMenuScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    endGameScreen.classList.remove('active');
    wordModeScreen.classList.remove('active');
    screenToShow.classList.add('active');
}

function revealCard() {
    flipSound.play();
    cardFlipper.classList.add('is-flipped');
    revealControls.style.display = 'none';
    gameControls.style.display = 'block';
}

// Event Listeners
startGameBtn.addEventListener('click', () => {
    // --- Audio Unlock/Preload for Mobile ---
    // Play a sound on the first user interaction to "unlock" the audio context.
    // We use the click sound itself for this.
    clickSound.play();

    // Preload other sounds so they are ready to play without delay.
    // We set their volume to 0, play and pause them, then reset volume.
    // This is a robust way to force mobile browsers to buffer the audio.
    [flipSound, failSound, midSound, topSound].forEach(sound => {
        sound.load();
    });
    // --- End of Audio Unlock ---

    initGame();
});

wordModeBtn.addEventListener('click', () => {
    clickSound.play();
    clueInput.value = '';
    clueInputContainer.style.display = 'block';
    clueDisplayContainer.style.display = 'none';
    showScreen(wordModeScreen);
    clueInput.focus();
});

lockClueBtn.addEventListener('click', () => {
    const clue = clueInput.value.trim();
    if (clue) {
        clickSound.play();
        clueDisplay.textContent = clue.toUpperCase();
        clueInputContainer.style.display = 'none';
        clueDisplayContainer.style.display = 'block';
    }
});

nextClueBtn.addEventListener('click', () => {
    wordModeBtn.click(); // Simulate click to reset the screen
});

restartGameBtn.addEventListener('click', () => {
    clickSound.play();
    showScreen(mainMenuScreen);
});
revealCardBtn.addEventListener('click', revealCard);

successBtn.addEventListener('click', () => {
    handleChoice('success');
});
passBtn.addEventListener('click', () => {
    handleChoice('pass');
});
failureBtn.addEventListener('click', () => {
    handleChoice('failure');
});
endGameNowBtn.addEventListener('click', () => {
    clickSound.play();
    endGame();
});

wordModeEndBtn.addEventListener('click', () => {
    clickSound.play();
    showScreen(mainMenuScreen);
});

// Initial screen setup
loadHighScore();
showScreen(mainMenuScreen);