const text = "Hi!, I am Ujjwal Parajuli, a full stack developer.";
const textContainer = document.getElementById("typewriter-text");

function typeWriter(text, i) {
    if (i < text.length) {
        textContainer.innerHTML += text.charAt(i);
        const audio = new Audio("keyboard-click.mp3"); // Replace with the path to your keyboard click sound
        audio.play();
        setTimeout(function () {
            typeWriter(text, i + 1);
        }, 100); // Adjust the typing speed here (milliseconds)
    }
}

// Start the typing animation when the page loads
window.onload = function () {
    typeWriter(text, 0);
};
