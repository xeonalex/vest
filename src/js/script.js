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
	$('.size-blocks__item').on('click', function(event) {
		event.preventDefault();
		if (!$(this).hasClass('active')) {
			$('.size-blocks__item').each(function(index, el) {
				$(this).removeClass('active')
			});
			$(this).addClass('active')
		}
	});
  $('.color-block__item').on('click', function(event) {
    event.preventDefault();
    if (!$(this).hasClass('active')) {
      $('.color-block__item').each(function(index, el) {
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

$('.spinner input').on('focusout', function(){
  var val=$(this).val();
  if (val<'0') {$(this).val('0');
  alert(1);};
  if (Math.ceil(val) - val > 0) {$(this).val(parseInt(val, 10))};
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
    mouseDrag: false
  });
	// плавное появление
	$(".carousel-wrap").css({'visibility': 'visible', 'opacity':'1' });


//Кнопка вниз
  var delay = 800; // Задержка прокрутки
    $('#down-button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка вниз */
      $('body, html').animate({
        scrollTop: 5000
      }, delay);
    });
    $('#up-button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });

$('.take-call').on('click',function(){
    $('.popup__make-call-wrap').bPopup({
        closeClass: 'close-popup__make-call',
    });
  return false;
})

});
