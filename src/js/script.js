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