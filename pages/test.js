const slider = document.getElementById('sliderr');
const cardsContainer = document.getElementById('cardsContainerr');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

let scrollAmount = 0;

scrollLeftBtn.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - 200, 0);
    cardsContainer.style.transform = 'translateX(-${scrollAmount}px)';
});

scrollRightBtn.addEventListener('click', () => {
    scrollAmount = Math.min(scrollAmount + 200, cardsContainer.scrollWidth - cardsContainer.clientWidth);
    cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

