(function($, SNW, window) {

	'use strict';

	var $element = $('.js-nav-menu');
	var $nav = $('nav');
	var $trigger = $('.js-nav-trigger');
	var menuClose = 'nav__menu--hide';
	var menuOpen = 'nav__menu--show';
	var menuState = false;

	function _navOpen() {
		$element.removeClass(menuClose);
		$element.addClass(menuOpen);
		$trigger.attr('aria-hidden', 'false');
		menuState = true;
	}

	function _navClose() {
		$element.removeClass(menuOpen);
		$element.addClass(menuClose);
		$trigger.attr('aria-hidden', 'true');
		menuState = false;
	}

	function _navAction(event) {
		event.preventDefault();
		if ( true === menuState ) {
			_navClose();
		} else {
			_navOpen();
		}
	}
	
	function _setup() {
		$element.addClass(menuClose);
	}

	function _bindEvents() {
		$trigger.on( 'click', _navAction );
	}
	
	function fInit() {
		_bindEvents();	
		_setup();
	}

	SNW.Nav = {
		init: fInit
	};

	return SNW;

})(jQuery, SNW || {}, window);

