'use strict';

const header = document.querySelector("header");

const images = [
    "./assets/images/photoSlider(1).png",
    "./assets/images/photoSlider(2).png",
    "./assets/images/photoSlider(3).png"
];

let currentIndex = 0;

function changeHeaderBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    header.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeHeaderBackground, 5000);


