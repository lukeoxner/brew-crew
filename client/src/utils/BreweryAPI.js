import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
	searchBreweries: function (query) {
		return axios.get(
			"https://api.openbrewerydb.org/breweries/search?query=" + query
		);
	},
	getAllBreweries: function () {
		return axios.get("https://api.openbrewerydb.org/breweries");
	},
};
