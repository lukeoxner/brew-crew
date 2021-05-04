import React, { useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core/";
import Details from "../components/Details";

function Home() {
	// create state - useState
	const [results, setResults] = useState([]);

	// make a call to API to get some data - useEffect
	useEffect(() => {
		// make API call here
		fetch("https://api.openbrewerydb.org/breweries")
			.then((res) => res.json())
			.then((data) => setResults(data));
	}, []);

	return (
		<>
			<h1>Search Page</h1>
			<Container>
				<Grid container direction="row" justify="center" alignItems="center">
					{results.map((result) => (
						<Grid item>
							<Details
								id={result.id}
								key={result.id}
								name={result.name}
								street={result.street}
								city={result.city}
								state={result.state}
								website={result.website_url}
								type={result.brewery_type}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}

export default Home;
