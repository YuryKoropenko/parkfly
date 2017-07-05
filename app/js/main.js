$(document).ready(function() {
	$('.h-nav a[href="#block-price"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
					return false;
				}
			}
	});
	$('.h-nav a[href="#block-marsh"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
					return false;
				}
			}
	});
	$('.f-nav a[href="#block-price"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
					return false;
				}
			}
	});
	$('.f-nav a[href="#block-marsh"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
					return false;
				}
			}
	});

	/*form*/
	$('.h-nav__button input').on('click', function() {
		$('.popup-bg').fadeIn();
		$('.popup-reservation').fadeIn();
	});
	$('.p-priceList__button button').on('click', function() {
		$('.popup-bg').fadeIn();
		$('.popup-reservation').fadeIn();
	});

	$('.popup-bg').on('click', function() {
		$(this).fadeOut();
		$('.popup-reservation').fadeOut();
	});
	$('.popup-reservation__close button').on('click', function() {
		$('.popup-bg').fadeOut();
		$('.popup-reservation').fadeOut();
	});

	/*toogle-menu*/
	$('.h-nav__mob-button').on('click', function() {
		$(this).parent().children('.h-nav').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.h-nav').length) return;
				$('.h-nav').slideUp();
				event.stopPropagation();
			});
		return false;
	});

});