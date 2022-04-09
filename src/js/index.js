import {$} from './common';

// Табуляция
if ($('.js-tabs-page').length) {
	$('.js-tabs-page-list').each(function(){
		$(this).find('.js-tabs-page-item:first').addClass("active");
	});

	$('.js-tabs-page-content').each(function(){
		$(this).find('.js-tabs-page-content-item:first').fadeIn();
	});

	$('.js-tabs-page-item').on('click',function(e) {
		e.preventDefault();
		var $parent = $(this).parents('.js-tabs-page');

		$parent.find('.js-tabs-page-content-item').hide();
		$parent.find('.js-tabs-page-item').removeClass('active');

		$(this).addClass("active");
		$parent.find('#' + $(this).attr('data-item')).fadeIn();
	});
}

// Слайдер отзывов
if($('.js-review-slider').length){
	$('.js-review-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0',
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arr-left" width="10" height="16"><use xlink:href="/assets/sprites/sprite.svg#ic-arr-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arr-right" width="10" height="16"><use xlink:href="/assets/sprites/sprite.svg#ic-arr-right"></use></svg></button>',
	});
}

// Слайдер кейсов
if($('.js-cases-slider').length){
	$('.js-cases-slider').slick({
		centerMode: true,
		centerPadding: 'calc(50% - 585px)',
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		appendArrows: $('.js-cases-slider-arr'),
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arr-left" width="10" height="16"><use xlink:href="/assets/sprites/sprite.svg#ic-arr-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arr-right" width="10" height="16"><use xlink:href="/assets/sprites/sprite.svg#ic-arr-right"></use></svg></button>',
	});
}
