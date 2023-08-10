
/*pageWidth = document.documentElement.scrollWidth;
if (pageWidth > 770 && pageWidth < 1120) {
    //Items = document.querySelectorAll('.extra-item768');
    var Items = document.querySelectorAll('.brand_select');
    for (var i = 0; i < 6; i++) {
        Items[i].classList.toggle('extra-item__visiable');
    }
    for (var i = 6; i < Items.length; i++) {
        Items[i].classList.toggle('extra-item__hidden');
    }
} else if (pageWidth >= 1120) {
    var Items = document.querySelectorAll('.brand_select');
    for (var i = 0; i < 8; i++) {
        Items[i].classList.toggle('extra-item__visiable');
    }
    for (var i = 8; i < Items.length; i++) {
        Items[i].classList.toggle('extra-item__hidden');
    }
    //Items = document.querySelectorAll('.extra-item1120');
    //Items.forEach(x => x.classList.toggle('extra-item768'));
}
console.log(Items);*/
var Items_text = document.querySelector('.readmore_title3');
let ExpandButton_text = document.querySelector('.readmore__button');
ExpandButton_text.onclick = function() {
    btnContent_text = document.querySelector('.readmore__button > span');
    ExpandButton_text.classList.toggle('button1');
    btnContent_text.innerHTML =
      (btnContent_text.innerHTML === 'Читать далее') ? 
      (btnContent_text.innerHTML = 'Скрыть') 
      : btnContent_text.innerHTML = 'Читать далее';
    //var Items = document.querySelectorAll('.brand_select');
    Items_text.classList.toggle('readmore_title3');
    Items_text.classList.toggle('readmore_title3_1'); 
};

var Items = document.querySelectorAll('.brand_select');
let ExpandButton = document.querySelector('.services-menu__desktop__button');
ExpandButton.onclick = function() {
    btnContent = document.querySelector('.services-menu__desktop__button > span');
    ExpandButton.classList.toggle('button1');
    btnContent.innerHTML =
      (btnContent.innerHTML === 'Показать все') ? 
      (btnContent.innerHTML = 'Скрыть') 
      : btnContent.innerHTML = 'Показать все';
    //var Items = document.querySelectorAll('.brand_select');
    Items.forEach(x => x.classList.toggle('brand_select'));
    Items.forEach(x => x.classList.toggle('brand_select1'));  
};

var Items1 = document.querySelectorAll('.repair-menu__slide');
let ExpandButton1 = document.querySelector('.repair-menu__desktop__button');
ExpandButton1.onclick = function() {
    btnContent1 = document.querySelector('.repair-menu__desktop__button > span');
    ExpandButton1.classList.toggle('button1');
    btnContent1.innerHTML =
      (btnContent1.innerHTML === 'Показать все') ? 
      (btnContent1.innerHTML = 'Скрыть') 
      : btnContent1.innerHTML = 'Показать все';
    //var Items = document.querySelectorAll('.brand_select');
    Items1.forEach(x => x.classList.toggle('repair-menu__slide'));
    Items1.forEach(x => x.classList.toggle('repair-menu__slide1'));  
};

var Items_menu = document.querySelector('.mobile_menu');
var Items_body = document.querySelector('.mobile_body');
let ExpandButton_mob = document.querySelector('.mob_menu');
let ExpandWindow = 1;
ExpandButton_mob.onclick = function() {
    //var Items = document.querySelectorAll('.brand_select');
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden'); 
    ExpandWindow = document.querySelector('.mobile_body__hidden');
};


var Items_menu = document.querySelector('.mobile_menu');
var Items_body = document.querySelector('.mobile_body');
let ExpandButton_d1 = document.querySelector('.d1_menu');
ExpandButton_d1.onclick = function() {
    //var Items = document.querySelectorAll('.brand_select');
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden'); 
    ExpandWindow = document.querySelector('.mobile_body__hidden');
    console.log(ExpandWindow);

};
ExpandWindow.onclick = function () {
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden');
}

var Items_menu = document.querySelector('.mobile_menu');
var Items_body = document.querySelector('.mobile_body');
let ExpandButton_mob_menu = document.querySelector('.mobile_menu-header-close_button');
ExpandButton_mob_menu.onclick = function() {
    //var Items = document.querySelectorAll('.brand_select');
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden');
    ExpandWindow = 1;
};
/*if (a) {
let ExpandWindow = document.querySelector('.mobile_body__hidden');
ExpandWindow.onclick = function () {
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden');
} 
}*/


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

