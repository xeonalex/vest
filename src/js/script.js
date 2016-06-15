
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
$(document).ready(function(){

	// Слайдер на главной странице
	$('.carousel-main').owlCarousel({
  	items: 1,
  	nav: false,
  	pagination: true,
  	navText: [],
    loop: true,
  	autoplay:true,
  });
	// плавное появление
	$(".carousel-wrap").css({'visibility': 'visible', 'opacity':'1' });
});
