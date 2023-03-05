import { data } from 'script/data.js';

function initSlider() {

    let sliderImages = document.querySelector(".slider__img");
    let sliderArrows = document.querySelectorAll(".button-arrow");
    let sliderDots = document.querySelector(".button-circle");
    let sliderDiscription = document.querySelector(".slider__description");
    let sliderLinks = document.querySelector(".slider__links");

    initImages();
    initArrows();
    initDots();
    initLinks();

    function initImages() {
        data.forEach((el, index) => {
            let img = `<img src="assets/images/slider-img${index}.jpg" class="img ${index === 0? "active" : ""}" data-index="${index}" alt="example-interior">`;
            sliderImages.innerHTML += img;
        });
    }

    function initArrows() {
        sliderArrows.forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left-arrow")) {
                    nextNumber = curNumber === 0 ? data.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === data.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {
        data.forEach((el, index) => {
            let dot = `<img src="assets/images/circle.svg" alt="circle" class="circle__page ${index === 0? "circle__page_checked" : ""}" data-index="${index}"></img>`
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".circle__page").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function moveSlider(num) {
        changeImg(num);
        changeLink(num);
        changeInfo(num);
        changeDots(num);
    }

    function changeImg(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(`[data-index='${num}']`).classList.add("active");
    }

    function changeLink(num) {
        sliderLinks.querySelector(".slider__link_checked").classList.remove("slider__link_checked");
        sliderLinks.querySelector(`[data-index='${num}']`).classList.add("slider__link_checked");
    }

    function changeInfo(num) {
        let subtitleCity = sliderDiscription.querySelector(".subtitle-city");
        let subtitleApart = sliderDiscription.querySelector(".subtitle-apart");
        let subtitleTime = sliderDiscription.querySelector(".subtitle-time");
        subtitleCity.innerText = `${data[num].subtitleCity}`;
        subtitleApart.innerText = `${data[num].subtitleApart}`;
        subtitleTime.innerText = `${data[num].subtitleTime}`;
    }

    function changeDots(num) {
        sliderDots.querySelector(".circle__page_checked").classList.remove("circle__page_checked");
        sliderDots.querySelector(`[data-index='${num}']`).classList.add("circle__page_checked");
    }

    function initLinks() {
        sliderLinks.querySelectorAll(".slider__link").forEach(link => {
            link.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        });
    }

}

document.addEventListener("DOMContentLoaded", initSlider);