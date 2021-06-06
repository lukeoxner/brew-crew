import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	search: function (query) {
		return axios.get(
			"https://api.openbrewerydb.org/breweries/search?query=" + query
		);
	},
	getAll: function () {
		return axios.get("https://api.openbrewerydb.org/breweries");
	},
};
