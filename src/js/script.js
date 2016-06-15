
  $(function() {
    $( "#spinner" ).spinner({
      spin: function( event, ui ) {
        if ( ui.value > 10 ) {
          $( this ).spinner( "value", -10 );
          return false;
        } else if ( ui.value < -10 ) {
          $( this ).spinner( "value", 10 );
          return false;
        }
      }
    });
  });
// слайдер на странице товара
 $('.product__big-photo-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product__gallery-nav-bar'
});
$('.product__gallery-nav-bar').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product__big-photo-wrap',
  centerMode: false,
  focusOnSelect: true
});


$(document).ready(function(){

	// Слайдер на главной странице
	$('.carousel-main').owlCarousel({
  	items: 1,
  	nav: false,
  	pagination: true,
  	navText: [],
    loop: true,
  	autoplay:true,
    mouseDrag: false
  });
	// плавное появление
	$(".carousel-wrap").css({'visibility': 'visible', 'opacity':'1' });



});
