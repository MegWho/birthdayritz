const wishButton = document.getElementById('wishButton');
const wishCount = document.getElementById('wishCount');
const photoButton = document.getElementById('photoButton');
const quizButton = document.getElementById('quizButton');

let count = 0;

wishButton.addEventListener('click', () => {
    count++;
    wishCount.textContent = count;
});
