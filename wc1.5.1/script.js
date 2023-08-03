/*pageWidth = document.documentElement.scrollWidth;
        if (pageWidth > 768 && pageWidth < 1119.9) {
            let Items = document.querySelectorAll('.extra-item768');
        } else if (pageWidth > 1120) {
            let Items = document.querySelectorAll('.extra-item1120');
        }*/

const btnContent = document.querySelector('.button > span');
btnContent.addEventListener('click', function() {
    btnContent.innerHTML =
      (btnContent.innerHTML === 'Показать все') ? btnContent.innerHTML = 
      'Скрыть' : btnContent.innerHTML = 'Показать все';
})


let ExpandButton = document.querySelector('.button');
ExpandButton.onclick = function() {
        let Items = document.querySelectorAll('.extra-item768');
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

