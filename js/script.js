// current date
document.getElementById("year").innerHTML = new Date().getFullYear();
// from https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript

// Bootstrap Carousel
const myCarousel = new bootstrap.Carousel(myCarouselElement, {
    cycle: true,
    interval: 2000,
    pause: hover,
    touch: false
})