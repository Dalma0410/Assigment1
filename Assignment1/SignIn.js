<<<<<<< HEAD
SignIn.js
var y;
 
function speichern() {
	// 1. Auslesen der input felder
	var vornameInputElement = document.getElementById("vorname");
	console.log(vornameInputElement.value);
	
	var nachnameInputElement = document.getElementById("nachname");
	console.log(nachnameInputElement.value);

	var emailadresseInputElement = document.getElementById ("emailadresse");
	console.log(emailadresseInputElement.value);
	
	var telInputElement = document.getElementById("telefonnummer");
	console.log(telInputElement.value);
	
	// 2. In die Tabelle schreiben
	var tabelle = document.getElementById("userTable");
	console.log(tabelle);
	var row = tabelle.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell (2)
	var cell4 = row.insertCell (3);
	cell1.innerHTML = vornameInputElement.value;
	cell2.innerHTML = nachnameInputElement.value;
	cell3.innerHTML = emailadresseInputElement.value;
	cell4.innerHTML = telInputElement.value;
	
	
	var cell5 = row.insertCell(4);
	cell5.innerHTML = '<button onclick="loeschen(this)"> X </button>';
	
}

function loeschen (x) {
	
	y =x.parentNode.parentNode;
    y.parentNode.removeChild(y);


}
=======
SignIn.js
>>>>>>> 5ef154683a320ada013e126282cfcd1fc04835a4
