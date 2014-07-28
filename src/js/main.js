/* global window */
(function (root) {
	'use strict';
	var $ = root.$;

	$(function(){
		$('.navbar-brand').text('Innova.RE Monitor');

		for(var i = 0; i < 3; i++) {
			$($('.nav.navbar-nav.side-nav li')[i]).css('display','block');
		}

		$($('.flot-chart-content')[0]).parent().parent().parent().css('display', 'none');
	});

}(this));
