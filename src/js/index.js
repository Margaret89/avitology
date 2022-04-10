import {$, Inputmask, Fancybox} from './common';

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
		// centerMode: true,
		// centerPadding: 'calc(50% - 585px)',
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		appendArrows: $('.js-cases-slider-arr'),
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arr-left" width="10" height="16"><use xlink:href="/assets/sprites/sprite.svg#ic-arr-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arr-right" width="10" height="16"><use xlink:href="/assets/sprites/sprite.svg#ic-arr-right"></use></svg></button>',
	});
}

// Валидация форм
function errorField(form, event) {
	form.find('.js-form-site-item').removeClass('error');
	form.find('.form-site-msg-error').remove();
	
	form.find('input[type=email]').each(function(){
		mailValid($(this));
	});

	form.find('.js-input-mail').each(function(){
		mailValid($(this));
	});

	function mailValid(elem) {
		var email = $(elem).val().trim();
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;

		if (!pattern.test(email) && (email.length > 1)) {
			$(elem).closest('.js-form-site-item').addClass('error');
			$(elem).attr('placeholder','Укажите корректный E-mail');
		}
	}

	form.find('input,textarea,select').filter('[required]').each(function(){
		if($(this).val().length < 1){
			$(this).closest('.js-form-site-item').addClass('error');

			if($(this).hasClass('js-phone')){
				$(this).attr('placeholder','Укажите ваш номер телефона');
			} else {
				$(this).attr('placeholder','Заполните поле');
			}
		}

		if($(this).attr('type') == 'checkbox' && !$(this).prop('checked')){
			$(this).closest('.js-form-site-polit').append('<div class="form-site-msg-error">Подтвердите обработку персональных данных</div>')
		}
		if($(this).attr('type') == 'radio' && !$('input[name="'+$(this).attr("name")+'"]').is(':checked')){
			$(this).closest('.js-form-site-item').addClass('error');
			$(this).closest('.js-form-site-item').append('<div class="form-site-msg-error">Заполните поле</div>')
		}
	});

	if(form.find('.js-form-site-item.error').length){
		event.preventDefault();
	}
}

if($('.js-valid-form').length){
	$('.js-valid-form').on('click', '.js-btn-submit', function(e){
		var $form = $(this).closest('form');
		errorField($form, e);
		// var msg = $(this).closest('.js-valid-form').data('msg');
	});

	$('.js-valid-form').on('submit', 'form', function(e){
		var msg = $(this).closest('.js-valid-form').data('msg');
		var successTitle = $(this).closest('.js-valid-form').data('success');
		var successText = $(this).closest('.js-valid-form').data('text');
		var tempSuccessTitle = $('.js-success-alert-title').text();

		console.log('11111111');

		if(msg != 'none'){
			if(successTitle){
				$('.js-success-alert-title').text(successTitle);
			} else {
				$('.js-success-alert-title').text(tempSuccessTitle);
			}
	
			if(successText == 'none'){
				$('.js-success-alert-text').css('display', 'none');
			} else {
				$('.js-success-alert-text').css('display', 'block');
			}

			Fancybox.close();
			Fancybox.show([{ src: "#msg-success", type: "inline" }]);
		}
		$(this)[0].reset();

		e.preventDefault();
	});
}

// Маска для телефона
Inputmask('+7 (999) 999-9999').mask('.js-phone');