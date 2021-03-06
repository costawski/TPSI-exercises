"use strict"

var matrice = [
				["0", "1", "2", "3", "4", "5"],   
				["6", "7", "8", "9", "A", "B"], 
				["C", "D", "E", "F", "G", "H"], 
				["I", "J", "K", "L", "M", "N"],
				["O", "P", "Q", "R", "S", "T"],
				["U", "V", "W", "X", "Y", "Z"]   ];


// vettori dove salvare i 5 numeri generati 
var nSegreti = new Array(5);       

window.onload = function(){	
	let _txtUser = document.getElementById("txtUser");
	let _txtPwd = document.getElementById("txtPwd");
	let _txtCaptcha = document.getElementById("txtCaptcha");
	let _divsCaptcha =  document.getElementsByClassName("captcha");
	let _btnControllaCaptcha = document.getElementById("btnControllaCaptcha")
	let _btnGeneraCaptcha = document.getElementById("btnGeneraCaptcha")
	let _btnInvia = document.getElementById("btnInvia")
	let _imgOk = document.getElementById("imgOk");

	generaCaptcha();

	_btnControllaCaptcha.addEventListener("click", controllaCaptcha);
	_btnGeneraCaptcha.addEventListener("click", generaCaptcha);
	_btnInvia.addEventListener("click", invia);
	_txtUser.addEventListener("change", function() {
		let len = _txtUser.value.length;

		if(len < 8) {
			_txtUser.classList.add("bordoRosso");
		}
		else {
			_txtUser.classList.remove("bordoRosso");
		}
	});
	_txtPwd.addEventListener("change", function() {
		let len = _txtPwd.value.length;
		let cont = 0;
		let i = 0;
		let trovato = false;

		while(!trovato && i < len) {
			let c = _txtPwd.value.charCodeAt(i);

			if(c >= 49 && c <= 57) {
				cont++;
				trovato = true;
			}

			i++;
		}

		trovato = false;
		i = 0;

		while(!trovato && i < len) {
			let c = _txtPwd.value.charCodeAt(i);

			if(c >= 97 && c <= 122) {
				cont++;
				trovato = true;
			}

			i++;
		}

		trovato = false;
		i = 0;

		while(!trovato && i < len) {
			let c = _txtPwd.value.charCodeAt(i);

			if(c >= 65 && c <= 90) {
				cont++;
				trovato = true;
			}

			i++;
		}

		if(len >= 8 && cont == 3) {
			_txtPwd.classList.remove("bordoRosso");
		}
		else {
			_txtPwd.classList.add("bordoRosso");
		}
	});

	function generaCaptcha() {
		for(let i = 0; i < 5; i++) {
			let x = generaNumero(0, 6);
			let y = generaNumero(0, 6);

			_divsCaptcha[i].style.backgroundPosition = -50*x + "px " + -50*y + "px"; 
			_divsCaptcha[i].id = `cord-${x}-${y}`;
		}

		_txtCaptcha.value = "";
	}
	function controllaCaptcha() {
		let esci = false;
		let i = 0;

		do {
			let aus = _divsCaptcha[i].id.split("-");
			let r = parseInt(aus[1]);
			let c = parseInt(aus[2]);
			let string = _txtCaptcha.value;

			let car = string.substr(i, 1);

			if(matrice[c][r] != car) {
				esci = true;
			}

			i++;
		} while(!esci && i < 5);

		if(!esci) {
			_imgOk.src = "img/ok.png";
		}
		else {
			_imgOk.src = "img/nok.png";
		}

		_txtCaptcha.disabled = true;
		_btnControllaCaptcha.disabled = true;
		_btnGeneraCaptcha.disabled = true;
	}
	function invia() {
		if(!_txtUser.classList.contains("bordoRosso") && !_txtPwd.classList.contains("bordoRosso") && _imgOk.src.endsWith("/ok.png")) {
			window.location.href = "pagina2.html";
		}
		else {
			alert("Captcha, username o password sono sbagliati!");
		}
	}
}

function generaNumero(min,max){
    let rnd = Math.floor((max - min) * Math.random()) + min;
    return rnd;
}
