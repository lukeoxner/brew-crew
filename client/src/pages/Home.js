// *** USER AUTHENTICATION FEATURES NOT USED FOR MVP - WILL BE ADDED IN FUTURE DEVELOPMENT ***
// * This home page will displayed to users when logged in (first draft) *

import React from 'react';
import { Button, makeStyles, Container } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Background from '../images/beer-on-beach.jpg';
import Typography from '@material-ui/core/Typography';
import Landing from './Landing';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	indent: {
		textIndent: '30px',
	},
});

function Home() {
	const classes = useStyles();
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return (
			<>
				<div
					style={{
						position: 'relative',
						backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.70)), url(${Background})`,
						width: '100',
						height: '100vh',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						backgroundAttachment: 'fixed',
						overflow: 'hidden',
					}}
				>
					<Container
						className={classes.root}
						style={{
							position: 'absolute',
							bottom: '60%',
							left: '10%',
							width: '50%',
							maxHeight: '90',
							marginTop: '2rem',
							backgroundColor: `rgba(0,0,0,.0)`,
							color: 'white',
							overflow: 'hidden',
						}}
					>
						<Typography
							style={{
								fontSize: '3.0rem',
								fontWeight: '600',
								textShadow: '2px 2px #000000',
								textAlign: 'left',
							}}
						>
							Welcome back to BrewCrew!
						</Typography>
					</Container>
				</div>
			</>
		);
	} else {
		return <Landing />;
	}
}

export default Home;
