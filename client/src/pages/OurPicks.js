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
	const classes = useStyles();

	// create state - useState
	const [results, setResults] = useState([]);

	// make a call to API to get some data - useEffect
	useEffect(() => {
		// make API call here
		fetch(
			'https://api.openbrewerydb.org/breweries?by_state=colorado&by_city=fort_collins&per_page=3'
		)
			.then((res) => res.json())
			.then((data) => setResults(data));
	}, []);

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
