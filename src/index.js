import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import brewApi from './js/brew-api.js';

function getBrewery(city, state) {
	let promise = brewApi.getBrewery(city, state);
	promise.then(function (breweryArray) {
		printElements(breweryArray);
	}, function (errorArray) {
		printError(errorArray);
	});
}

// UI Logic 

function printElements(data) {
	let dataArray = data[0];
	document.getElementById("output").innerText = `Here are some breweries in ${data[1]}`;

	dataArray.forEach(function (id) {
		let p = document.createElement("p");
		p.append(id.name, id.street, id.phone);
		document.getElementById("output").append(p);
	});
}

function printError(errorArray) {
	return errorArray;
}

function handleSubmit(event) {
	event.preventDefault();

	const city = document.getElementById("city-input").value;
	const state = document.getElementById("state-input").value;
	document.getElementById("city-input").value = null;
	document.getElementById("state-input").value = null;

	getBrewery(city, state);
}

window.addEventListener("load", function () {
	document.querySelector("form").addEventListener("submit", handleSubmit);
})
