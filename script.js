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
    {q: "carecer de", a: "lack of"},
    {q: "inprescindible", a: "essential"},
    {q: "tiende puentes", a: "builds bridges"},
    {q: "ni siquiera", a: "not even"},
    {q: "de la cuna a la tumba", a: "from the cradle to the grave/ throughout life"},
    {q: "incierta", a: "uncertain"},
    {q: "desprovista", a: "devoid/ lacking"},
    {q: "solía", a: "tended to"},
    {q: "sin tregua", a: "relentlessly"},
    {q: "esquina", a: "corner"},
    {q: "muda", a: "mute/ muted"},
    {q: "arreglar", a: "to organize/ adjust/ fix"},
    {q: "brincar", a: "to jump"},
    {q: "además", a: "furthermore"},
    {q: "la despedida", a: "the goodbye/ farewell"},
    {q: "de que se trata", a: "what it's about"},
    {q: "bastante", a: "enough/ pretty"},
    {q: "amenazan", a: "they threatened"},
    {q: "la red", a: "the net (internet)"},
    {q: "redes sociales", a: "social medias"},
    {q: "a tráves", a: "throughout"},
    {q: "asomarse", a: "to check out/ to take a look"},
    {q: "dar un vistazo", a: "to take a look"},
    {q: "el ordenador", a: "the computer"},
    {q: "vacio", a: "empty"},
    {q: "lleno", a: "full"},
    {q: "rueda", a: "wheel"},
    {q: "asustar", a: "to fear"},
    {q: "arrepentimiento", a: "regret"},
    {q: "el villancico", a: "the christmas carol"},
    {q: "atreverse", a: "to dare"},
    {q: "hoy dia", a: "at the present time/ nowadays"},
    {q: "partir", a: "to leave"},
    {q: "la escasez", a: "the lack"},
    {q: "en actual", a: "currently"}
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
const numf = document.getElementById("num_flipped");

// having to do with indexing and limit button
let nCards = flashcards.length;
let limitAmt = 10;

function updateNumFlipped() {
    numf.textContent = "Cards flipped this session: " + numFlipped;
}

//initialize stats
cnum.textContent = "Current number of cards in deck: " + nCards

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
  currentIndex = (currentIndex + 1) % nCards;
  showCard(currentIndex);
});

// Limit number of flashcards
document.getElementById("limit").addEventListener("click", () => {
  if(nCards < flashcards.length) {
    nCards = flashcards.length;
  }
  else {
    nCards = limitAmt;
  }
  cnum.textContent = "Current number of cards in deck: " + nCards
});

// Previous flashcard
document.getElementById("prev").addEventListener("click", () => {
  playSound("woosh-sfx", 0.5);
  currentIndex = (currentIndex - 1 + nCards) % nCards;
  showCard(currentIndex);
});

document.getElementById("+").addEventListener("click", () => {
  limitAmt += 1;
  nCards = limitAmt;
  cnum.textContent = "Current number of cards in deck: " + nCards
});

document.getElementById("-").addEventListener("click", () => {
  limitAmt -= 1;
  nCards = limitAmt;
  cnum.textContent = "Current number of cards in deck: " + nCards
});

document.getElementById("shuffle").addEventListener("click", () => {
  playSound("card-shuffle-sfx", 0.1, 0.2);
    shuffleArray(flashcards);
    currentIndex = (currentIndex + 1) % nCards;
    showCard(currentIndex);
});