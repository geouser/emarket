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
      $element3 = $('.offer'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 1);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
    $element3.toggleClass(className, $document.scrollTop() >= 600);
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


  $('.offerSlider').slick({
    dots: false,
    arrows: true,
    fade: true
  });

   $('.historySlider').slick({
    dots: false,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    onAfterChange: function(slide, index){
      $('.historySlider').children('.slick-list').css('height', 'auto');
      $('.historySlider').children('.slick-track').css('height', 'auto');
      $('.historySlider__slide__info').children('.text').removeClass('full');
    }
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
      tError: '<a href="%url%">Изображение #%curr%</a> невозможно загрузить.',
      titleSrc: function(item) {
        return item.el.attr('title');
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

$('.historySlider__slide .button').click(function(e){
  e.preventDefault();
  $(this).siblings('.historySlider__slide__info').children('.text').toggleClass('full');
  $(this).parent().siblings().children('.historySlider__slide__info').children('.text').removeClass('full');
  $('.historySlider').children('.slick-list').css('height', 'auto');
  $('.historySlider').children('.slick-track').css('height', 'auto');
});


  /*---------------------------
                              GOOGLE MAP
---------------------------*/
  if ( $('#map_canvas').length > 0) {
    var myMap;
    coord = [59.934303, 30.337670];
    ymaps.ready(function () {
        myMap = new ymaps.Map("map_canvas", {
            center: coord,
            zoom: 17,
            controls: []
        });

        var placemark = new ymaps.Placemark(coord, null, {
            iconLayout: 'default#image',
            iconImageHref: 'images/map-marker.png',
            iconImageSize: [86, 74],
            iconImageOffset: [-24, -74],
        });
        myMap.geoObjects.add(placemark);
    }); 
  }

}); // end




