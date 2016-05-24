// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

jQuery(document).ready(function($) {

$('li:has(ul)').addClass('hasSub');
$('li.hasSub').click(function(event){
  event.preventDefault();
  $(this).siblings().children('.sub').slideUp();
  $(this).siblings().children('a').removeClass('active');
  $(this).children('a').toggleClass('active');
  $(this).children('.sub').slideToggle();
});

/*---------------------------
                              ADD CLASS ON SCROLL
---------------------------*/
$(function() { 
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 1);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
  });
});


/*---------------------------
                              MENU TOGGLE
---------------------------*/
$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $('header').toggleClass('active');
  $('.lang').toggleClass('active');
  if ($('header').hasClass('active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
});

  function fixZindex(){
    var i = $('section').length;
    $('section').each(function(index, el) {
      $(this).css({
        'z-index': i
      });
      i--;
    });
    console.log(i);
  }
  fixZindex();


  $('.offerSlider, .historySlider').slick({
    dots: false,
    arrows: true
  });


}); // end




