$(function () {
	const $gallery = $('.gallery a').simpleLightbox();

	validateEmail();
});


/**
 * A simple function that validate the email
 */
function validateEmail(){
	const isEmail = (text) =>{
		return /^.+@.+$/.test(text);
	}

	const emailForm = document.querySelector("#email-form");
	emailForm.addEventListener("submit", (e)=>{
		e.preventDefault();
		const email = document.querySelector("#email").value;
		alert((isEmail(email) ? "Registrado" : "E-mail Invalido!"));
	});
}

