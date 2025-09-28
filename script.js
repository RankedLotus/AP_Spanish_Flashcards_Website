const flashcards = [
    {q: "hay que", a: "we must"},
    {q: "el cura", a: "the priest"},
    {q: "mandar", a: "to control/ to command/ to send"},
    {q: "rey", a: "king"},
    {q: "huir", a: "to run away"},
    {q: "disponibles", a: "available"},
    {q: "malgastar", a: "to waste"},
    {q: "juntar", a: "to join"},
    {q: "riesgos para evitar", a: "risks to avoid"},
    {q: "ventajas", a: "advantages"},
    {q: "el nivel", a: "the level"},
    {q: "herramientas", a: "tools"},
    {q: "el aprendizaje", a: "the learning/ the lesson"},
    {q: "aprovechar", a: "to use/ to take advantage of"},
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
    {q: "fallecer", a: "to die"},
    {q: "los atrasos", a: "the delays"},
    {q: "desanimar", a: "to discourage/ to dishearten"},
    {q: "desperdiciar", a: "to waste"},
    {q: "inigualables", a: "unmatched/ unrivaled"},
    {q: "añadir", a: "to add/ to append"},
    {q: "movilizar", a: "to mobilize"},
    {q: "alcanzar", a: "to reach/ to attain"},
    {q: "el provecho", a: "the profit"},
    {q: "mis consejos", a: "my advice"},
    {q: "acomodadas", a: "well-off"},
    {q: "vinculada", a: "linked"},
    {q: "amontonarse", a: "to accumulate/ to pile up"},
    {q: "el desacuerdo", a: "the disagreement"},
    {q: "ellos son humíldes", a: "they are humble"},
    {q: "gozar", a: "to enjoy"},
    {q: "ajenos", a: "strangers"},
    {q: "disminuir", a: "to reduce/ to diminish"},
    {q: "carecer de", a: "lack of"}
];

function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const rn = Math.floor(Math.random() * (i + 1));
        [array[i], array[rn]] = [array[rn], array[i]];
    }
    return array;
}

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const is_mobile = isMobile();

function playSound(id, time, volume = 1.0) {
  const sfx = document.getElementById(id);
  sfx.currentTime = time;
  if(is_mobile) {
    sfx.volume = 0.0;
  }
  else {
    sfx.volume = volume;
  }
  
  sfx.play();
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
  playSound("card-flip-sfx", 0.3);
  flashcard.style.transition = "transform 0.6s"; // restore transition
  flashcard.classList.toggle("flipped");
  numFlipped += 1;
  updateNumFlipped()
});

// Next flashcard
document.getElementById("next").addEventListener("click", () => {
  playSound("woosh-sfx", 0.5);
  currentIndex = (currentIndex + 1) % flashcards.length;
  showCard(currentIndex);
});

// Previous flashcard
document.getElementById("prev").addEventListener("click", () => {
  playSound("woosh-sfx", 0.5);
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showCard(currentIndex);
});

document.getElementById("shuffle").addEventListener("click", () => {
  playSound("card-shuffle-sfx", 0.1, 0.2);
    shuffleArray(flashcards);
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard(currentIndex);
});