import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import brewApi from './js/brew-api.js';

function getBrewery(city, state, type) {
	let promise = brewApi.getBrewery(city, state, type);
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
		let ul = document.createElement("ul");
		let li = document.createElement("li");
		const infoString = `${id.name} | located: ${id.street} | call at: ${id.phone}`;
		li.append(infoString);
		ul.append(li);
		document.getElementById("output").append(ul);
	});
}

function printError(errorArray) {
	return errorArray;
}

function handleSubmit(event) {
	event.preventDefault();

	const city = document.getElementById("city-input").value;
	const state = document.getElementById("state-input").value;
	const type = document.getElementById("brewType").value;
	document.getElementById("brewType").value = null;
	document.getElementById("city-input").value = null;
	document.getElementById("state-input").value = null;

	getBrewery(city, state, type);
}

window.addEventListener("load", function () {
	document.querySelector("form").addEventListener("submit", handleSubmit);
});
