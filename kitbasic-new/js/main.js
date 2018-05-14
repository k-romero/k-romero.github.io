$(document).ready(function(){
  $('.slick-carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
  });

});

$('.single-item').slick({
  arrows: true,
  fade: true
});
