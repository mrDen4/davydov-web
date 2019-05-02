$(document).ready(function () {
    $('.header .header__right .right__callback').on('click', function () {
        $('.bg').toggleClass('bg--active');
        $('.popup').toggleClass('popup--active');
    });

    $('.bg, .popup .popup__exit').on('click', function () {
        $('.bg').removeClass('bg--active');
        $('.popup').removeClass('popup--active');
    });
});