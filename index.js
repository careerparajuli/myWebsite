const text = "Hi!, I am Ujjwal Parajuli, a full stack developer.";

const textContainer = document.getElementById("typewriter-text");

function typeWriter(text, i) {
  if (i < text.length) {
    textContainer.innerHTML += text.charAt(i);
    const audio = new Audio("keyboard_sound.mp3");
    audio.play();
    setTimeout(function () {
      typeWriter(text, i + 1);
    }, 100); // Adjusting the typing speed here (milliseconds)
  }
}

// Starting the typing animation when the page loads
window.onload = function () {
  typeWriter(text, 0);
};
