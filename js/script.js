// current date
document.getElementById("year").innerHTML = new Date().getFullYear();

// Multi-frame carousel logic for Bootstrap 5
let items = document.querySelectorAll('.carousel .carousel-item');

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = items[0];
        }
        let clone = next.querySelector('.col-md-3').cloneNode(true);
        el.appendChild(clone);
        next = next.nextElementSibling;
    }
});