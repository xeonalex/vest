$(document).ready(function(){
	$('.size-blocks__item').on('click', function(event) {
		event.preventDefault();
		if (!$(this).hasClass('active')) {
			$('.size-blocks__item').each(function(index, el) {
				$(this).removeClass('active')
			});
			$(this).addClass('active')
		}
	});
// Спиннер
	$(function() {
    $( "#spinner" ).spinner({
    	min: 0
    });
  });
// Вкладки
  $(function() {
		$( "#tabs" ).tabs();
	});
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
