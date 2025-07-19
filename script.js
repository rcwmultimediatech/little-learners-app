
function getDifficulty() {
  return 'easy';
}
function showGame(id) {
  alert(`Switching to ${id} screen...`);
}
function playWithZuri(gameId) {
  const voices = {
    memoryGame: document.getElementById('zuriMemory'),
    colorSortGame: document.getElementById('zuriColor'),
    letterPopGame: document.getElementById('zuriLetter'),
    soundSurpriseGame: document.getElementById('zuriSurprise')
  };
  const voice = voices[gameId];
  if (voice) {
    voice.play();
    voice.onended = () => showGame(gameId);
  } else {
    showGame(gameId);
  }
}
window.addEventListener('load', () => {
  const greeting = new SpeechSynthesisUtterance("Hi, I’m Aria! Let’s learn together!");
  greeting.pitch = 1.1;
  greeting.rate = 1;
  greeting.voice = speechSynthesis.getVoices().find(v => v.name.includes("female") || v.lang.includes("en"));
  setTimeout(() => speechSynthesis.speak(greeting), 500);
});
