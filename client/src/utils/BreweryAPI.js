import axios from "axios";

// Export an object containing methods we'll use for accessing the Brewery API

export default {
	search: function (query) {
		fetch(
			`https://api.openbrewerydb.org/breweries/search?${query}=&per_page=25`
		)
			.then((res) => res.json())
			.then(function (data) {
				let theResult = data;
				console.log(theResult);
				return theResult;
			});
		// .then((data) => setResults(data));
	},
	getAll: function () {
		return axios.get("https://api.openbrewerydb.org/breweries");
	},
};
