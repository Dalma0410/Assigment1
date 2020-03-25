script.js

(function () {
	function init() {
		var button = document.getElementById('button');
		button.addEventListener('click', erzeugeZeitStempel);
	}

	function erzeugeZeitStempel() {
		var zeitstempeltext = document.createTextNode(document.lastModified),
			textZuvor = document.createTextNode('Datum des letzten Updates: ');
		document.getElementById('absatz')
			.appendChild(textZuvor);
		document.getElementById('absatz')
			.appendChild(zeitstempeltext);
	}
	document.addEventListener('DOMContentLoaded', init);
}());



	function fensterOeffnen() { 
    window.open('');
    }

