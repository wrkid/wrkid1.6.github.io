/*btnContent = document.querySelector('.button > span');
btnContent.addEventListener('click', function() {
    btnContent.innerHTML =
      (btnContent.innerHTML === 'Показать все') ? 
      (btnContent.innerHTML = 'Скрыть') 
      : btnContent.innerHTML = 'Показать все';
})*/

pageWidth = document.documentElement.scrollWidth;
if (pageWidth > 770 && pageWidth < 1120) {
    Items = document.querySelectorAll('.extra-item768');
} else if (pageWidth >= 1120) {
    Items = document.querySelectorAll('.extra-item1120');
}

let ExpandButton = document.querySelector('.button');
ExpandButton.onclick = function() {
    btnContent = document.querySelector('.button > span');
    ExpandButton.classList.toggle('button1');
    btnContent.innerHTML =
      (btnContent.innerHTML === 'Показать все') ? 
      (btnContent.innerHTML = 'Скрыть') 
      : btnContent.innerHTML = 'Показать все';
    Items.forEach(x => x.classList.toggle('extra-item__visiable'));   
};

var swiper = new Swiper(".swiper", {
    speed: 1000,
    loop: true,
    updateOnWindowResize: true,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        360: {
            slidesPerView: 1.47,
            spaceBetween: 20
        },
        390: {
            slidesPerView: 1.65,
            spaceBetween: 20
        },
        767.8: {
            enabled: false
        }
    }
});

