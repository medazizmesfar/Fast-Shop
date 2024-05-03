let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const sliderNav = document.querySelector('.slider-nav');

// Create navigation bullets
for (let i = 0; i < slides.length; i++) {
const bullet = document.createElement('span');
bullet.classList.add('bullet');
bullet.addEventListener('click', function() {
    slideIndex = i;
    showSlides();
});
sliderNav.appendChild(bullet);
}

function showSlides() {
for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    sliderNav.children[i].classList.remove('active');
}
slides[slideIndex].classList.add('active');
sliderNav.children[slideIndex].classList.add('active');
slideIndex++;
if (slideIndex >= slides.length) {
    slideIndex = 0;
}
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

showSlides(); // Start slideshow
// ----------------------------------------------------------------


const slider = document.getElementById('sliderr');
const cardsContainer = document.getElementById('cardsContainerr');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

let scrollAmount = 0;

scrollLeftBtn.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - 500, 0);
    cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

scrollRightBtn.addEventListener('click', () => {
    scrollAmount = Math.min(scrollAmount + 500, cardsContainer.scrollWidth - cardsContainer.clientWidth);
    cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

function showAge() {
        var ageInput = document.getElementById("age");
        var selectedAge = document.getElementById("selectedAge");
        selectedAge.textContent = ageInput.value;
        }