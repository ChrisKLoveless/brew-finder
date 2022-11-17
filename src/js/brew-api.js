export default class brewApi {
	static getBrewery(city, state, type) {  //city and state parameters are for the string literal below i.e. URL
		return new Promise(function (resolve, reject) {
			let request = new XMLHttpRequest();  //new request object
			const url = `https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}&by_type=${type}&per_page=10`;
			request.addEventListener("loadend", function () {
				const response = JSON.parse(this.responseText);
				if (this.status == 200) {
					resolve([response, city, state, type]);  //this keyword is referencing the request XHR
				} else {
					reject([this, response, city, state, type]);
				}
			});
			request.open("GET", url, true);
			request.send();
		});
	}
}