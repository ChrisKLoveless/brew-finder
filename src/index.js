import './css/styles.css';
import brewApi from './js/brew-api.js';

function getBrewery(city, state) {
	let promise = brewApi.getBrewery(city, state);
	promise.then(function (breweryArray) {
		printElements(breweryArray);
	}, function (errrorray) {
		printError(errorArray);
	});
}

