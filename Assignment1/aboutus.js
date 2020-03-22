aboutus.js
'use strict';
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#button')
		.addEventListener('click', warnung);

	function warnung() {
		alert('Sie sollten doch nicht drücken!');
	}
});