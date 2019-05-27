$(document).ready(function(){
  $('.single-item').slick({
    arrows: true,
    fade: true,
    dots: true
  });
  $('.slick-carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
  });
});
