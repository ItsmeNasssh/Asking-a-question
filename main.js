const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const headerImg = document.querySelector(".header-img"); // Select the PNG image

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Move the "No" button randomly
btnNo.addEventListener("mouseover", () => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;

    let newTop = getRandomNumber(0, containerHeight - btnHeight);
    let newLeft = getRandomNumber(0, containerWidth - btnWidth);

    btnNo.style.position = "absolute";
    btnNo.style.top = `${newTop}px`;
    btnNo.style.left = `${newLeft}px`;
});

// Handle "Yes" button click
btnYes.addEventListener("click", () => {
    // Hide unnecessary elements
    btnNo.classList.add("hide");
    btnYes.classList.add("hide");
    imageOne.classList.add("hide");

    // Show the GIF
    imageTwo.classList.remove("hide");

    // Remove the PNG image
    if (headerImg) {
        headerImg.remove();
    }

    // Add the "Yey! I love you Jo❤️" message
    if (!document.querySelector(".love-message")) {
        const loveMessage = document.createElement("h1");
        loveMessage.textContent = "Yey! I love you Jo ❤️";
        loveMessage.classList.add("love-message");

        // Style the message
        loveMessage.style.color = "#dc2626";
        loveMessage.style.fontSize = "2.5rem";
        loveMessage.style.textAlign = "center";
        loveMessage.style.marginTop = "1rem";
        loveMessage.style.transition = "opacity 0.5s ease-in-out";
        loveMessage.style.opacity = "0";

        // Append the message below the GIF
        container.appendChild(loveMessage);

        // Fade-in effect
        setTimeout(() => {
            loveMessage.style.opacity = "1";
        }, 100);
    }
     // ❤️ Trigger Heart Confetti Effect
     createHeartConfetti();
});
 
// 🎉 Confetti Heart Function
function createHeartConfetti() {
    for (let i = 0; i < 30; i++) { // Number of hearts
        const heart = document.createElement("div");
        heart.classList.add("confetti-heart");
        heart.innerHTML = "❤️"; // Heart emoji as confetti

        // Random position and animation delay
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}