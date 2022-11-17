import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import brewApi from './js/brew-api.js';

function getBrewery(city, state) {
    brewApi.getBrewery(city, state)
		.then(function (response) {
			if (response[0]) {
				printElements(response, city, state);
			} else {
				printError(response, city, state);
			}
	});
}

// UI Logic 

function printElements(response, city, state) {

	if(response.length === 0){
		//const city = document.getElementById("city-input").value;
		// const stateError = document.getElementById("state-input").value;
		// const typeError = document.getElementById("brewType").value;
		document.getElementById("output").innerHTML = `There are no results for in ${city}, ${state}.`;
	} else {
		document.getElementById("output").innerText = `Here are some breweries in ${response[1].city}, ${response[1].state}`;
		response.forEach(function (id) {
		let ul = document.createElement("ul");
		let li = document.createElement("li");
		const infoString = `${id.name} | located: ${id.street} | call at: ${id.phone}`;
		li.append(infoString);
		ul.append(li);
		document.getElementById("output").append(ul);
	});
}
}

function printError(error, city) {
	console.log(error);
	document.getElementById("output").innerHTML = "There was an error:" + error + " " + city + "NO USER INPUT.";
	// const output = document.getElementById("output");
	// output.innerHTML = error[0].status + " error: " + error[1].statusText + " in " + city;
}

function handleSubmit(event) {
	event.preventDefault();

	const city = document.getElementById("city-input").value;
	const state = document.getElementById("state-input").value;
	const type = document.getElementById("brewType").value;
	// document.getElementById("brewType").value = null;
	// document.getElementById("city-input").value = null;
	// document.getElementById("state-input").value = null;

	getBrewery(city, state, type);
}

function resetPage() {
	document.location.reload();
}

window.addEventListener("load", function () {
	document.querySelector("form").addEventListener("submit", handleSubmit);
	document.getElementById("refresh").addEventListener('click', resetPage);
});
