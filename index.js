$(document).ready(function(){
    $('.slider1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        dotsClass: 'dots-class',
        prevArrow: $('.slider-button1'),
        nextArrow: $('.slider-button2')
    });
  });

