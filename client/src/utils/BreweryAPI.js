// TO BE USED FOR FUTURE DEV

import axios from "axios";

// Export an object containing methods we'll use for accessing the Brewery API

export default {
	search: function (query) {
		fetch(
			`https://api.openbrewerydb.org/breweries/search?query=${query}&per_page=25`
		)
			.then((res) => res.json())
			.then(function (data) {
				let theResult = data;
				console.log(`API file result: ${theResult}`);
				return theResult;
			});
	},
	getCity: function (city) {
		fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
	},
	getState: function (state) {
		fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`);
	},
	getAll: function () {
		return axios.get("https://api.openbrewerydb.org/breweries?per_page=25");
	},
};
