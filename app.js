const words = [
  { word: "because", meaning: "for the reason that", arabic: "لأن" },
 { word: "people", meaning: "more than one person", arabic: "أشخاص" },

{ word: "between", meaning: "in the space that separates two things", arabic: "بين" },

 { word: "always", meaning: "at all times", arabic: "دائماً" },

];

 
let at = 0;
const meaning = document.getElementById("meaning");
const answer = document.getElementById("answer");
const result = document.getElementById("result");
function show() {
  meaning.textContent = "Which word means: " + words[at].meaning + " (" + words[at].arabic + ")?";
  answer.value = "";
  result.textContent = "";
}
document.getElementById("check").addEventListener("click", () => {
  const right = answer.value.trim().toLowerCase() === words[at].word;
  result.textContent = right ? "Correct!" : "Not yet. Try again.";
});
document.getElementById("next").addEventListener("click", () => {
  at = (at + 1) % words.length;
  show();
});
show();
function speak(text, rate = 1) {

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  speech.rate = rate;

  speechSynthesis.speak(speech);

}

document.getElementById("listen").addEventListener("click", () => {

  speak(words[at].word);

});

document.getElementById("listenMeaning").addEventListener("click", () => {

  speak(words[at].meaning);

});

document.getElementById("slow").addEventListener("click", () => {

  speak(words[at].word, 0.6);

});
