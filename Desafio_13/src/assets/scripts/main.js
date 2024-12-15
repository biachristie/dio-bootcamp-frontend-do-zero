import { animateCardHover } from "./card-animation.js";

animateCardHover();

const selectCarouselItem = (selectedButton) => {
    const selectedItem = selectedButton.target.id;
    const carousel = document.querySelector(".s-cards-carousel");

    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);

    const newTransform = transform.replace(rotateY[0], `rotateY(${ rotateYDeg }deg)`);
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector(".s-controller__button--active");
    activeButtonElement.classList.remove("s-controller__button--active");
    selectedButton.target.classList.add("s-controller__button--active");
}

document.getElementById("1").onclick = selectCarouselItem;
document.getElementById("2").onclick = selectCarouselItem;
document.getElementById("3").onclick = selectCarouselItem;