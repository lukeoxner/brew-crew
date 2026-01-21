import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import Details from '../components/Details';
import Loading from '../components/Loading';
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		color: '#dbdbdb',
	},
	background: {
		backgroundColor: '#303030',
		minHeight: '100vh',
	},
	picksContainer: {
		paddingTop: '110px',
	},
	picksGrid: {
		paddingTop: '30px',
	},
	title: {
		fontWeight: 500,
		fontSize: '40px',
		color: '#dbdbdb',
		textShadow: '2px 2px #000',
	},
}));

function OurPicks() {
	const classes = useStyles();

	// create state - useState
	const [results, setResults] = useState([]);
	const [isBusy, setBusy] = useState(true);

	let picks = [];

	useEffect(() => {
		getPickOne();
	}, []);

	function getPickOne() {
		fetch(
			'https://api.openbrewerydb.org/v1/breweries/63fd2c11-5530-4de9-8fe2-8fbf65e3a49f',
		)
			.then((res) => res.json())
			.then((data) => picks.push(data))
			.then(() => getPickTwo());
	}

	function getPickTwo() {
		fetch(
			'https://api.openbrewerydb.org/v1/breweries/63fd2c11-5530-4de9-8fe2-8fbf65e3a49f',
		)
			.then((res) => res.json())
			.then((data) => picks.push(data))
			.then(() => getPickThree());
	}

	function getPickThree() {
		fetch(
			'https://api.openbrewerydb.org/v1/breweries/63fd2c11-5530-4de9-8fe2-8fbf65e3a49f',
		)
			.then((res) => res.json())
			.then((data) => picks.push(data))
			.then(() => makeResults());
	}

	function makeResults() {
		setResults(picks);
		setBusy(false);
	}

	return (
		<>
			<div className={classes.background}>
				<Container>
					{isBusy ? (
						<Loading />
					) : (
						<Container className={classes.picksContainer}>
							<Typography className={classes.title} align='center' variant='h4'>
								Our Favorite Breweries
							</Typography>
							<Grid
								container
								direction='row'
								justify='center'
								alignItems='center'
								className={classes.picksGrid}
							>
								{results &&
									results.map((result) => (
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
					)}
				</Container>
			</div>
		</>
	);
}

export default OurPicks;
