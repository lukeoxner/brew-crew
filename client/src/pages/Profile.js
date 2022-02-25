// *** USER AUTHENTICATION FEATURES NOT USED FOR MVP - WILL BE ADDED IN FUTURE DEVELOPMENT ***

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
	Card,
	CardMedia,
	Typography,
	CardContent,
	makeStyles,
	Button,
	Avatar,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Landing from './Landing';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '19%',
	},
	cardTitle: {
		fontWeight: '20px',
	},
	media: {
		height: '204',
		width: '100x',
		paddingTop: '56.25%', // 16:9
	},
	button: {
		color: '#5e235b',
		margin: 'auto',
		backgroundColor: '#8989fc',
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20),
	},
	GridMargin: {
		margin: '10px',
	},
}));

function Profile() {
	const { user, isAuthenticated } = useAuth0();

	const classes = useStyles();

	console.log(user);

	if (isAuthenticated) {
		return (
			<div
				style={{
					height: '100vh',
					width: '100%',
					position: 'absolute',
					top: '15%',
				}}
			>
				<Typography
					align='center'
					variant='h3'
					style={{ marginTop: '20px', color: '#000000' }}
				>
					Welcome {user.name}
				</Typography>
				<Grid container direction='row' alignItems='center' justify='center'>
					<Grid item>
						<Card
							className={classes.root}
							variant='outlined'
							style={{
								backgroundColor: `rgba(0,0,0,.7)`,
								color: 'white',
								boxShadow: '5px 5px 15px #424242',
								width: '300px',
							}}
						>
							<CardContent>
								<Typography
									style={{ opacity: '1' }}
									className={classes.cardTitle}
								>
									Your Email: {user.email}
								</Typography>
								<br />

								<Avatar
									src={user.picture}
									className={classes.large}
									style={{ margin: 'auto' }}
								/>
								<br />
								<Typography align='center'>User Description</Typography>
								<br />
							</CardContent>
						</Card>
					</Grid>
					<Grid item style={{ marginTop: '50px' }}>
						<Grid>
							<Grid item className={classes.GridMargin}>
								<Card
									variant='outlined'
									style={{
										backgroundColor: `rgba(0,0,0,.7)`,
										color: 'white',
										boxShadow: '5px 5px 15px #424242',
										width: '300px',
									}}
								>
									<CardContent>
										<Typography className={classes.cardTitle}>
											Favorite Breweries:
										</Typography>

										<Typography></Typography>
										<br />
									</CardContent>
								</Card>
							</Grid>
							<Grid item className={classes.GridMargin}>
								<Card
									variant='outlined'
									style={{
										backgroundColor: `rgba(0,0,0,.7)`,
										color: 'white',
										boxShadow: '5px 5px 15px #424242',
										width: '300px',
									}}
								>
									<CardContent>
										<Typography className={classes.cardTitle}>
											Your Crew:
										</Typography>

										<Typography></Typography>
										<br />
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	} else return <Landing />;
}

export default Profile;
