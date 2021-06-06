import React, { useEffect, useState } from "react";
import { Grid, Container, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Details from "../components/Details";
import API from "../utils/BreweryAPI";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
}));

function Search() {
	const classes = useStyles();

	// temporary variable placeholder for search term
	// TODO - write function to change spaces to % in search term
	let searchTerm = "Denver";

	// create state - useState
	const [results, setResults] = useState([]);

	// make a call to API to get some data - useEffect
	useEffect(() => {
		setResults(API.search());
	}, []);

	const onChange = (e) => {
		console.log(e.target.value);
		setResults(API.search(e.target.value));
		// console.log(API.search(e.target.value));
		console.log(results);
	};

	if (!results) {
		return (
			<>
				<h1>Search Page</h1>
				<Container>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item sm={11} lg={8}>
							<div className={classes.root}>
								<TextField
									id="search"
									style={{ margin: 8 }}
									placeholder="Search"
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={onChange}
								/>
							</div>
						</Grid>
					</Grid>
				</Container>
			</>
		);
	} else {
		return (
			<>
				<h1>Search Page</h1>
				<Container>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item sm={11} lg={8}>
							<div className={classes.root}>
								<TextField
									id="search"
									style={{ margin: 8 }}
									placeholder="Search"
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={onChange}
								/>
							</div>
						</Grid>
					</Grid>
					<Grid container direction="row" justify="center" alignItems="center">
						{results
							? results.map((result) => (
									<Grid item key={result.id}>
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
							  ))
							: console.log("yo")}
					</Grid>
				</Container>
			</>
		);
	}
}

export default Search;
