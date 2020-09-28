$(function() {
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('#arrow-prev'),
    nextArrow: $('#arrow-next'),
  });

  $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slide: 'div',
    cssEase: 'linear'
});

})

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

