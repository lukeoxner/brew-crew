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

	// TODO - write function to change spaces to % in search term

	// create state - useState
	const [searchTerm, setSearchTerm] = useState([]);
	const [results, setResults] = useState([]);

	// make a call to API to get some data - useEffect
	useEffect(() => {
		setResults(API.search(searchTerm));
		console.log("useEffect called");
	}, []);

	const onChange = (e) => {
		console.log(`e.target.value: ${e.target.value}`);
		setSearchTerm(e.target.value);
		fetch(
			`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}&per_page=25`
		)
			.then((res) => res.json())
			.then(function (data) {
				let theResult = data;
				console.log(`API file result: ${theResult}`);
				setResults(theResult);
			});
		// API.search(searchTerm);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			console.log("enter press here! ");
			fetch(
				`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}&per_page=25`
			)
				.then((res) => res.json())
				.then(function (data) {
					let theResult = data;
					console.log(`API file result: ${theResult}`);
					setResults(theResult);
				});
		}
	};

	async function runSearch() {}

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
									onKeyPress={handleKeyPress}
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
