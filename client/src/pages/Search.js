import React, { useEffect, useState } from 'react';
import {
	Grid,
	Container,
	TextField,
	InputBase,
	Typography,
} from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Details from '../components/Details';
import API from '../utils/BreweryAPI';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiInputBase-root': {
			gridColumn: 1,
			gridRow: 1,
			background: '#1f1f1f',
			color: '#fff',
			// fontSize: '20px',
			padding: '10px',
			paddingLeft: '25px',
			display: 'block',
			width: '100%',
			// outlineColor: '#bdbdbd',
			// outlineStyle: 'solid',
			// outlineWidth: '1px',
			borderRadius: '15px',
			boxShadow: '0px 4px 10px #000',
			zIndex: 0,
		},
		// display: 'flex',
		// flexWrap: 'wrap',
		display: 'grid',
		marginTop: '15px',
		marginBottom: '15px',
	},
	background: {
		backgroundColor: '#303030',
		minHeight: '100vh',
	},
	header: {
		textAlign: 'center',
	},
	searchContainer: {
		paddingTop: '100px',
	},
	searchGrid: {
		paddingTop: '30px',
	},
	searchIcon: {
		gridColumn: 1,
		gridRow: 1,
		padding: theme.spacing(0, 2),
		height: '100%',
		pointerEvents: 'none',
		zIndex: 1,
		color: '#f1a922',
		// color: '#dbdbdb',
		backgroundColor: '#171717',
		width: '25px',
		justifySelf: 'end',
		height: '100%',
		borderRadius: '15px',
	},
	icon: {
		height: '100%',
		// fontSize: '30px',
		// stroke: '#fff',
		// strokeOpacity: '70%',
	},
	title: {
		fontWeight: 500,
		fontSize: '40px',
		color: '#dbdbdb',
		textShadow: '2px 2px #000',
	},
	intro: {
		// color: '#f1a922',
		fontWeight: 400,
		fontSize: '20px',
		fontStyle: 'italic',
		color: '#dbdbdb',
		textShadow: '1px 1px #000',
		paddingTop: '15px',
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
				<Container className={classes.searchContainer}>
					<Typography className={classes.title} align='center' variant='h4'>
						Find Your New Favorite Brewery!
					</Typography>
					<Typography className={classes.intro} align='center'>
						Use the search bar below to find breweries by name or location.
					</Typography>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						className={classes.searchGrid}
					>
						<Grid item xs={10} sm={6} lg={4}>
							<div className={classes.root}>
								<div className={classes.searchIcon}>
									<SearchIcon className={classes.icon} />
								</div>
								<InputBase
									onChange={onChange}
									placeholder='Search breweries...'
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
							: console.log('No results')}
					</Grid>
				</Container>
			</div>
		</>
	);
}

export default Search;
