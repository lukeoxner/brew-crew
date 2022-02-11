import React, { useEffect, useState } from 'react';
import { Grid, Container, TextField, InputBase } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Details from '../components/Details';
import API from '../utils/BreweryAPI';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiInputBase-root': {
			background: '#1f1f1f',
			color: '#fff',
			// fontSize: '20px',
			padding: '10px',
			paddingLeft: '25px',
			marginTop: '15px',
			marginBottom: '15px',
			display: 'block',
			width: '100%',
			textAlign: 'center',
			outlineColor: '#f1a922',
			outlineStyle: 'solid',
			outlineWidth: '2px',
			borderRadius: '15px',
		},
		display: 'flex',
		flexWrap: 'wrap',
	},
	background: {
		backgroundColor: '#606060',
		minHeight: '100vh',
	},
	header: {
		textAlign: 'center',
	},
	searchGrid: {
		paddingTop: '100px',
	},
}));

function Search() {
	const classes = useStyles();

	// create state - useState
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState([]);

	// make a call to API to get some data - useEffect
	useEffect(() => {
		fetch(
			`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}&per_page=25`
		)
			.then((res) => res.json())
			.then(function (data) {
				setResults(data);
			});
	}, [searchTerm]);

	const onChange = (e) => {
		// console.log(`e.target.value: ${e.target.value}`);
		let searchInput = e.target.value;
		let formattedSearchInput = searchInput.replace(' ', '_');
		setSearchTerm(formattedSearchInput);
	};

	return (
		<>
			<div className={classes.background}>
				<Container>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						className={classes.searchGrid}
					>
						<Grid item xs={10} sm={6} lg={4}>
							<div className={classes.root}>
								<InputBase
									onChange={onChange}
									placeholder='Search breweries by name or location…'
									inputProps={{
										'aria-label': 'search',
									}}
								/>
							</div>
						</Grid>
					</Grid>
					<Grid container direction='row' justify='center' alignItems='center'>
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
							: console.log('yo')}
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Search;
