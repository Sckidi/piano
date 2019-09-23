const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}
function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
  }
  
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  
  window.addEventListener("keydown", playNote);
