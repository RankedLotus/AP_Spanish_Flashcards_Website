const genflashcards = [
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
    {q: "en actual", a: "currently"},
    {q: "no mola nada", a: "it's not cool at all"},
    {q: "la rueda", a: "the wheel"}
];

const u1flashcards = [
  {q: "amenazar", a: "to threaten"},
  {q: "arrastrar", a: "to drag"},
  {q: "alcanzar", a: "to reach"},
  {q: "apoyar", a: "to support"},
  {q: "asomarse", a: "to look out"},
  {q: "atreverse", a: "to dare"},
  {q: "animarse", a: "to cheer up"},
  {q: "arriesgarse", a: "to take a risk"},
  {q: "arrojar", a: "to throw"},
  {q: "aprovechar", a: "to use/ to take advantage of"},
  {q: "crear", a: "to create"},
  {q: "crecer", a: "to grow"},
  {q: "creer", a: "to believe"},
  {q: "criar", a: "to raise/ to grow up"},
  {q: "conocer", a: "to be familiar with"},
  {q: "desempeñar", a: "to play (the role)/ to perform"},
  {q: "echar", a: "to throw"},
  {q: "entretener", a: "to entertain"},
  {q: "embellecer", a: "to glamorize/ to embellish"},
  {q: "evitar", a: "to avoid"},
  {q: "fallecer", a: "to die"},
  {q: "lanzar", a: "to launch"},
  {q: "mandar", a: "to send/ to command"},
  {q: "marcharse", a: "to leave"},
  {q: "oscurecer", a: "to darken"},
  {q: "iluminar", a: "to illuminate"},
  {q: "padecer", a: "to suffer"},
  {q: "pelear", a: "to fight"},
  {q: "quitar", a: "to remove/ to take off"},
  {q: "soler", a: "to tend to/ to be in the habit of"},
  {q: "temer", a: "to fear"},
  {q: "valer la pena", a: "worth the effort"},
  {q: "vencer", a: "to conquer"},
  {q: "unir", a: "to unite"},
  {q: "vincular", a: "to link"},
  {q: "unificar", a: "to unify"},
  {q: "enseñar", a: "to teach"},
  {q: "grabar", a: "to record/ to print"},
  {q: "gozar", a: "to enjoy"},
  {q: "abrazar", a: "to embrace"},
  {q: "esconder", a: "to hide"},
  {q: "quejarse", a: "to complain"},
  {q: "gestionar", a: "to manage/ to control"},
  {q: "el aprendizaje", a: "the learning"},
  {q: "el conocimiento", a: "the familiarity/ the knowledge"},
  {q: "el riesgo", a: "the risk"},
  {q: "el ordenador", a: "the computer"},
  {q: "el temor", a: "the fear"},
  {q: "el villancico", a: "the christmas carol"}
];


const all_decks = [u1flashcards, genflashcards]
const deck_names = ["temas 1-6 vocab", "general vocab"]
let deck_index = 0
let flashcards = all_decks[deck_index]

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

// the elements that show the stats
const cnum = document.getElementById("curr_num");
const numf = document.getElementById("num_flipped");
const cdeck = document.getElementById("which_deck")
cdeck.textContent = "Current deck: " + deck_names[deck_index]

// having to do with indexing and limit button
let nCards = flashcards.length;
let limitAmt = 10;

function updateNumFlipped() {
    numf.textContent = "Cards flipped this session: " + numFlipped;
    cnum.textContent = "Current number of cards in deck: " + nCards
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

document.getElementById("change_deck").addEventListener("click", () => {
  deck_index = (deck_index + 1) % all_decks.length;
  flashcards = all_decks[deck_index];
  nCards = flashcards.length
  updateNumFlipped();
  shuffleArray(flashcards);
  currentIndex = (currentIndex + 1) % nCards;
  showCard(currentIndex);
  cdeck.textContent = "Current deck: " + deck_names[deck_index]
});