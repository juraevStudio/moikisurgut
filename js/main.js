document.querySelector('.header__catalog_btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.catalog_menu').classList.toggle('active');
});

if(document.querySelector('.catalog__filter')) {
    const filterOpen = document.querySelectorAll('.filter_open');
    for(let i = 0; i < filterOpen.length; i++) {
        filterOpen[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    };
};

if(document.querySelector('.catalog_open')) {
    const catalogOpen = document.querySelectorAll('.catalog_open');
    for(let i = 0; i < catalogOpen.length; i++) {
        catalogOpen[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const catalogOpenp = this.querySelector('p');
            if(this.classList.contains('active')) {
                catalogOpenp.textContent = "Cкрыть";
            } else {
                catalogOpenp.textContent = "Показать все";
            };
        });
    };
};

document.querySelector('.open_search').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__search').classList.toggle('active');
});

document.querySelector('.btn_open_menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header_min_menu').classList.toggle('active');
});

document.querySelector('.mobile_menu__burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header_min_menu').classList.toggle('active');

    document.querySelector('.mobile_catalog').classList.remove('active');
});
document.querySelector('.mobile_menu__catalog').addEventListener('click', function() {
    document.querySelector('.mobile_catalog').classList.toggle('active');

    document.querySelector('.mobile_menu__burgir').classList.remove('active');
    document.querySelector('.header_min_menu').classList.remove('active');
});

const catalogLi = document.querySelectorAll('.mobile_catalog__li');
for(let i = 0; i < catalogLi.length; i++) {
    catalogLi[i].addEventListener('click', function() {
        this.classList.add('active');
    });
};

const catalogBack = document.querySelectorAll('.mobile_catalog__back');
for(let i = 0; i < catalogBack.length; i++) {
    catalogBack[i].addEventListener('click', function() {
        
        for(let j = 0; j < catalogLi.length; j++) {
            setTimeout(function() {
                catalogLi[j].classList.remove('active');
            }, 001);
        };

    });
};

if(document.querySelector('.catalog_menu_open')) {
    document.querySelector('.catalog_menu_open').addEventListener('click', function() {
        document.querySelector('.catalog__filter').classList.add('active');
        document.querySelector('body').classList.add('hidden');
    });
    document.querySelector('.fliter_close').addEventListener('click', function() {
        document.querySelector('.catalog__filter').classList.remove('active');
        document.querySelector('body').classList.remove('hidden');
    });
};


if(document.querySelector('.product__description')) {
    const desBtn1 = document.querySelector('#description_btn1');
    const desBtn2 = document.querySelector('#description_btn2');
    const desBtn3 = document.querySelector('#description_btn3');
    const desBlock1 = document.querySelector('#descrioption_block1');
    const desBlock2 = document.querySelector('#descrioption_block2');
    const desBlock3 = document.querySelector('#descrioption_block3');
    desBtn1.addEventListener('click', function() {
        this.classList.add('active');
        desBtn2.classList.remove('active');
        desBtn3.classList.remove('active');

        desBlock1.classList.add('show');
        desBlock2.classList.remove('show');
        desBlock3.classList.remove('show');
    });
    desBtn2.addEventListener('click', function() {
        this.classList.add('active');
        desBtn1.classList.remove('active');
        desBtn3.classList.remove('active');

        desBlock2.classList.add('show');
        desBlock1.classList.remove('show');
        desBlock3.classList.remove('show');
    });
    desBtn3.addEventListener('click', function() {
        this.classList.add('active');
        desBtn1.classList.remove('active');
        desBtn2.classList.remove('active');

        desBlock3.classList.add('show');
        desBlock1.classList.remove('show');
        desBlock2.classList.remove('show');
    });
};

if(document.querySelector('.catalog_menu_open')) {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100) {
            $('.catalog_menu_open').addClass('fixed');
        } else {
            $('.catalog_menu_open').removeClass('fixed');
        }
    });
};
if(document.querySelector('.product__content .btn')) {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 400) {
            $('.product__content .btn').addClass('fixed');
        } else {
            $('.product__content .btn').removeClass('fixed');
        }
    });
};

document.querySelector('main').addEventListener('click', function() {
    document.querySelector('.header__catalog_btn').classList.remove('active');
    document.querySelector('.catalog_menu').classList.remove('active');
});
document.querySelector('footer').addEventListener('click', function() {
    document.querySelector('.header__catalog_btn').classList.remove('active');
    document.querySelector('.catalog_menu').classList.remove('active');
});
document.querySelector('.header__top').addEventListener('click', function() {
    document.querySelector('.header__catalog_btn').classList.remove('active');
    document.querySelector('.catalog_menu').classList.remove('active');
});
document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.header__catalog_btn').classList.remove('active');
    document.querySelector('.catalog_menu').classList.remove('active');
});