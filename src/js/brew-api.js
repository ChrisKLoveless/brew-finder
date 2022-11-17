export default class brewApi {
	static getBrewery(city, state) {  //city and state parameters are for the string literal below i.e. URL
		return fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}&per_page=10`)
				.then(function(response) {
					if(!response.ok) {
						const errorMessage = `${response.status} ${response.statusText}`;
						throw new Error(errorMessage);
					  }else if (city === "" && state === ""){
							const errorMessage = `${response.status} ${response.statusText}`;
						throw new Error(errorMessage);
						}else {
						return response.json();
					  }
					})      
					.catch(function(error) {
					  return error;

				});


	// 		request.addEventListener("loadend", function () {
	// 			const response = JSON.parse(this.responseText);
	// 			if (this.status == 200) {
	// 				resolve([response, city, state, type]);  //this keyword is referencing the request XHR
	// 			} else {
	// 				reject([this, response, city, state, type]);
	// 			}
	// 		});
	// 		request.open("GET", url, true);
	// 		request.send();
	// 	});
	// }
}
}

