/* header
------------------------------------------ */
$('.header__hamburger-button').on('click', function (e) {
    $(".header__nav").slideToggle();
});

$('.header__nav a[href^="#"]').on('click', function () {
    $('.header__hamburger-button').click();
});

