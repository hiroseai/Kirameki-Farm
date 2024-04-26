/* header
------------------------------------------ */
var hamburger = $('.header__nav');

$('.header__hamburger-button').on('click', function () {
    hamburger.toggleClass('header__nav-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('header__nav-active');
});

$('.header__nav a[href^="#"]').on('click', function () {
    $('.header__hamburger-button').click();
});

/* cover
------------------------------------------ */
var swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: "clickable"
    },
});

/* faq
------------------------------------------ */
$('.faq__item-question').on('click', function (e) {
    $(this).toggleClass('faq__item-question-active');
    $(this).next().slideToggle();
});