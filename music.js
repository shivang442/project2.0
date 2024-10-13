window.onload = () => {
    const textElement = document.getElementById('text');

    // Store the original position
    const originalX = window.innerWidth / 2 - textElement.clientWidth / 2; // Centering the text
    const originalY = window.innerHeight / 2 - textElement.clientHeight / 2; // Centering the text

    // Set a random position for the text element
    const randomX = Math.random() * (window.innerWidth - textElement.clientWidth);
    const randomY = Math.random() * (window.innerHeight - textElement.clientHeight);

    // Move the text to the random position
    textElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
    textElement.style.opacity = 1; // Make it visible

    // After 5 seconds, move it back to the original position
    setTimeout(() => {
        textElement.style.transform = `translate(${originalX}px, ${originalY}px)`;
    }, 5000); // 5000 milliseconds = 5 seconds
};