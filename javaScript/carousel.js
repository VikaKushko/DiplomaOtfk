'use strict';

// Конструктор слайдера
function Slider(containerId, intervalTime) {
    this.container = document.getElementById(containerId);
    this.slides = this.container.querySelectorAll('img');
    this.currentIndex = 0;
    this.intervalTime = intervalTime || 3000;
}

// Метод для отображения слайда по индексу
Slider.prototype.showSlide = function(index) {
    this.slides.forEach(function(slide, i) {
        // Добавляем класс "active" только тому слайду, индекс которого совпадает
        slide.classList.toggle("active", i === index);
    });
};

// Метод для перехода к следующему слайду
Slider.prototype.nextSlide = function() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(this.currentIndex);
};

// Метод для автоматического запуска слайдера
Slider.prototype.start = function() {
    // Отображаем стартовый слайд
    this.showSlide(this.currentIndex);
    // Каждые intervalTime миллисекунд переключаем слайд
    setInterval(() => {
        this.nextSlide();
    }, this.intervalTime);
};

// Создаем два экземпляра слайдеров с идентичным интервалом (например, 3000 мс)
const slider1 = new Slider("slider1", 3000);
const slider2 = new Slider("slider2", 3000);

// Запускаем оба слайдера
slider1.start();
slider2.start();