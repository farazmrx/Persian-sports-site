$('a[href*="#"]')

.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  && 
  location.hostname == this.hostname
) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000, function() {
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        return false;
      } else {
        $target.attr('tabindex','-1');
        $target.focus();
      };
    });
  }
}
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className = "active";
}

$(document).ready(function () {
    
  $('.js--scroll-to-plans').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

$('.js--wp-1').waypoint(function(direction) {
  $('.js--wp-1').addClass('animate__animated animate__fadeIn');
}, {
  offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
  $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
}, {
  offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) {
  $('.js--wp-3').addClass('animate__animated animate__fadeIn');
}, {
  offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) {
  $('.js--wp-4').addClass('animate__animated animate__pulse');
}, {
  offset: '50%'
});
});