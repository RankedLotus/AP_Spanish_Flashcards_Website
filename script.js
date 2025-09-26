const flashcards = [
    {question: "hay que", answer: "we must"},
    {question: "el cura", answer: "the priest"}
];

let currentIndex = 0;
const flashcard = document.getElementById("flashcard");
const front = flashcard.querySelector(".front");
const back = flashcard.querySelector(".back");

// Initialize flashcard
function showCard(index) {
  front.textContent = flashcards[index].question;
  back.textContent = flashcards[index].answer;
  flashcard.classList.remove("flipped");
}

showCard(currentIndex);

// Flip the flashcard
document.getElementById("flip").addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
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