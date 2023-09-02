$('.banner-slider-container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    // autoplay: true,
    prevArrow: `<i class="fa-sharp fa-solid fa-angle-left prevArrow"></i>`,
    nextArrow: `<i class="fa-sharp fa-solid fa-angle-right nextArrow"></i>`,
});
new WOW().init();

// counter
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

// client

$('.client-sliders-container').slick({
    dots: false,
    infinite: true,
    speed: 200,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
});
// protfolio
$('.protfolio-sliders-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
});
// gallery-food-image
$('.sliders-images-gallery').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
});

