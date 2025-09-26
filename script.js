const flashcards = [
    {q: "hay que", a: "we must"},
    {q: "el cura", a: "the priest"},
    {q: "mandar", a: "to control/to command/to send"},
    {q: "rey", a: "king"},
    {q: "huir", a: "to run away"},
    {q: "disponibles", a: "available"},
    {q: "malgastar", a: "to waste"},
    {q: "juntar", a: "to join"},
    {q: "riesgos para evitar", a: "risks to avoid"},
    {q: "ventajas", a: "advantages"},
    {q: "el nivel", a: "the level"},
    {q: "herramientas", a: "tools"},
    {q: "el aprendizaje", a: "the learning/the lesson"},
    {q: "aprovechar", a: "to use/to take advantage of"},
    {q: "suele", a: "tends to"},
    {q: "debíl", a: "weak"},
    {q: "hechar", a: "to throw"},
    {q: "tirar", a: "to throw (out)"},
    {q: "ayuntamiento", a: "city hall"},
    {q: "flechas", a: "arrows"},
    {q: "siguio siendo libre", a: "continued being free"},
    {q: "anochecer", a: "nightfall"},
    {q: "sin embargo", a: "however"},
    {q: "la llamada innovación", a: "the so-called innovation"},
    {q: "flujos", a: "flows"},
    {q: "envejecer", a: "to age"},
    {q: "ambos", a: "both"},
    {q: "fallecer", a: "to die"}
];

function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const rn = Math.floor(Math.random() * (i + 1));
        [array[i], array[rn]] = [array[rn], array[i]];
    }
    return array;
}

shuffleArray(flashcards) // why you can just call it like this I have no clue

let numFlipped = 0
let currentIndex = 0;
const flashcard = document.getElementById("flashcard");
const front = flashcard.querySelector(".front");
const back = flashcard.querySelector(".back");
const cnum = document.getElementById("curr_num");
const numf = document.getElementById("num_flipped")

function updateNumFlipped() {
    numf.textContent = "Cards flipped this session: " + numFlipped;
}

//initialize stats
cnum.textContent = "Current number of cards in deck: " + flashcards.length

// Initialize flashcard
function showCard(index) {
  flashcard.style.transition = "none";

  flashcard.classList.remove("flipped");
  front.textContent = flashcards[index].q;
  back.textContent = flashcards[index].a;

  
}

showCard(currentIndex);

// Flip the flashcard
document.getElementById("flip").addEventListener("click", () => {
  flashcard.style.transition = "transform 0.6s"; // restore transition
  flashcard.classList.toggle("flipped");
  numFlipped += 1;
  updateNumFlipped()
});

// Next flashcard
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showCard(currentIndex);
});

// Previous flashcard
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showCard(currentIndex);
});

document.getElementById("shuffle").addEventListener("click", () => {
    shuffleArray(flashcards);
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard(currentIndex);
});