import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core/';
import Details from '../components/Details';
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	background: {
		backgroundColor: '#606060',
		minHeight: '100vh',
	},
	searchBar: {
		background: 'transparent',
	},
}));

function OurPicks() {
	let loading = true;

	const classes = useStyles();

	// create state - useState
	const [results, setResults] = useState([]);

	let picks = [];

	useEffect(() => {
		getPickOne();
		getPickTwo();
		getPickThree();
		setResults(picks);
		console.log(picks);
	}, []);

	function getPickOne() {
		fetch(
			'https://api.openbrewerydb.org/breweries/odell-brewing-co-fort-collins'
		)
			.then((res) => res.json())
			.then((data) => picks.push(data));
	}

	function getPickTwo() {
		fetch(
			'https://api.openbrewerydb.org/breweries/new-belgium-brewing-co-fort-collins'
		)
			.then((res) => res.json())
			.then((data) => picks.push(data));
	}

	function getPickThree() {
		fetch(
			'https://api.openbrewerydb.org/breweries/breckenridge-brewery-littleton'
		)
			.then((res) => res.json())
			.then((data) => picks.push(data));
	}

	return (
		<>
			<div className={classes.background}>
				<h1>Our Picks</h1>
				<Container>
					<Grid container direction='row' justify='center' alignItems='center'>
						{results.map((result) => (
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
						))}
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default OurPicks;
