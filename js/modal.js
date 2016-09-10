var open_close = document.querySelector(".show-form-btn");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var checkinDate = form.querySelector("[name=checkin-date]")
var checkoutDate = form.querySelector("[name=checkout-date]")
var adults = form.querySelector("[name=adults]")
var childs = form.querySelector("[name=childs]")

var storage_adults = localStorage.getItem("adults");
var storage_childs = localStorage.getItem("childs");

open_close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modal-content-show");
	popup.classList.remove("modal-content-error");
	if (storage_adults) {
		adults.value = storage_adults;
	}
	if (storage_childs) {
		childs.value = storage_childs;
	}
});


form.addEventListener("submit", function(event) {
	if (!checkinDate.value || !checkoutDate.value || !adults.value || !childs.value) {
		event.preventDefault();
		popup.classList.remove("modal-content-error");
        popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-content-error");
	}
    else {
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("childs", childs.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	  if (popup.classList.contains("modal-content-show")) {
	    popup.classList.remove("modal-content-show");
	    popup.classList.remove("modal-content-error");	
	  }
	}
});






