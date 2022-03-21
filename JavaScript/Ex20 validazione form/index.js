"use strict";


window.onload = function () {
    let _txtMatricola = document.getElementById("matricola");
    let _txtCognome = document.getElementById("cognome");
    let _txtNome = document.getElementById("nome");
	let _optGenere = document.getElementsByName("genere");
    let _lstRegione = document.getElementById("regione");
	let _chkLavoratore = document.getElementById("lavoratore");
    let _txtDescrizione = document.getElementById("descrizione");
		
	_txtMatricola.addEventListener("change", controllaMatricola);
	_txtCognome.addEventListener("change", controllaCognome);
	_txtNome.addEventListener("change", controllaNome);
	_lstRegione.addEventListener("change", controllaRegione);
	_chkLavoratore.addEventListener("click", abilitaDescrizione);
	
	document.querySelector("input[type=button]").addEventListener("click", validaForm);

	function controllaMatricola() {
		if(_txtMatricola.value.length != 12 || isDigit(_txtMatricola.value) == false) {
			_txtMatricola.classList.add("red-border");
		}
		else {
			_txtMatricola.classList.remove("red-border");
		}
	}

	function controllaCognome() {
		if(_txtMatricola.value.length == "" || )
	}
}
