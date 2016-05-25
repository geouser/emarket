// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

jQuery(document).ready(function($) {

$('li:has(ul)').addClass('hasSub');
$('li.hasSub').click(function(){
  $(this).siblings().children('.sub').slideUp();
  $(this).siblings().children('a').removeClass('active');
  $(this).children('a').toggleClass('active');
  $(this).children('.sub').slideToggle();
});

$('.hasSub > a').click(function(event){
	event.preventDefault();
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
      $('.overflow').css({'overflow': 'hidden', position: 'relative'});
      $('section').addClass('blur');
    } else {
      $('.overflow').css({'overflow': 'visible', position: 'static'});
      $('section').removeClass('blur');
    }
});

  function fixZindex(){
    var i = $('section').length +10;
    $('section').each(function(index, el) {
      $(this).css({
        'z-index': i
      });
      i--;
    });
  }
  fixZindex();


  $('.offerSlider, .historySlider').slick({
    dots: false,
    arrows: true,
    fade: true
  });


  $('.gallery-slider').slick({
    dots: false,
    arrows: true
  });
  $('.gallery-slider, .photo-gallery').magnificPopup({
    delegate: 'a.photo-item',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Изображение #%curr%</a> невозсожно загрузить.',
      titleSrc: function(item) {
        return item.el.attr('title');
        console.log(item);
      }
    }
  });

  $('.select .holder').text($('select#menu option:selected').text());
  var menuSelector = '#' + $('select#menu').val();
  $(menuSelector).css('display', 'block');

  $('.select').append('<ul class="dropdown"></ul>');
  var options = $('select#menu option');
  options.each(function(index, el) {
    $('.dropdown').append('<li data-selector="'+$(this).val()+'" class="dropdown-item">'+$(this).text()+'</li>')
  });

  $('.select').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  });

  $('.dropdown-item').on('click', function(event) {
    event.preventDefault();
    var text = $(this).text();
    var selector = $(this).data('selector');
    $('select#menu').val(selector);
    $('.select .holder').text(text);

    $('.menu-list').css('display', 'none');
    $('#'+selector).css('display', 'block');
  });

}); // end




