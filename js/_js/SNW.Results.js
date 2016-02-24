// list.js config
// http://www.listjs.com/

(function($, SNW, window) {

	'use strict';

	if ( ! window.List ) {
		return;
	}

	if ( $('.order-table').length < 1 || $('.list').has('tr').length < 1 ) {
		return;
	}

	var options = {
		valueNames: [ 'position', 'name', 'points', 'events', 'club', 'category' ]
	};

	SNW.results = new List('results', options);

	return SNW;

})(jQuery, SNW || {}, window);
