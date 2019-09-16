var currentTab = 0;
showTab(currentTab); 

/**
 * This function will display the specified tab of the form ...
 * @param {*} n 
 */
function showTab(n) {
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";

	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		document.getElementById("nextBtn").innerHTML = "Enviar";
	} else {
		document.getElementById("nextBtn").innerHTML = "Próximo";
	}

	fixStepIndicator(n)
}

/**
 *  This function will figure out which tab to display
 * @param {*} n 
 */
function nextPrev(n) {
	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) return false;
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab >= x.length) {
		document.getElementById("survey-form").submit();
		return false;
	}
	showTab(currentTab);
}

/**
 * This function deals with validation of the form fields
 */
function validateForm() {
	var x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	for (i = 0; i < y.length; i++) {
		if (y[i].value == "") {
			y[i].className += " invalid";
			valid = false;
		}
	}
	if (valid) {
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid; 
}

/**
 * This function removes the "active" class of all steps...
 * @param {*} n 
 */
function fixStepIndicator(n) {
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	x[n].className += " active";
}