const text = "Hi! I am Ujjwal Parajuli, a full-stack developer.";
const textContainer = document.getElementById("typewriter-text");
const yearSpan = document.getElementById("year");

// Typewriter effect
function typeWriter(text, index = 0) {
  if (!textContainer) return;

  if (index < text.length) {
    textContainer.textContent += text.charAt(index);
    setTimeout(() => typeWriter(text, index + 1), 80); // typing speed
  } else {
    // optional small pause + loop or blinking handled via CSS
  }
}

// Optional: audio with user interaction if you want
// const keySound = new Audio("keyboard_sound.mp3");
// function playKeySound() {
//   try {
//     keySound.currentTime = 0;
//     keySound.play();
//   } catch (e) {
//     // ignore if browser blocks autoplay
//   }
// }

window.addEventListener("load", () => {
  typeWriter(text);
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
