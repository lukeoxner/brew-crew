// *** USER AUTHENTICATION FEATURES NOT USED FOR MVP - WILL BE ADDED IN FUTURE DEVELOPMENT ***

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	login: {
		cursor: 'pointer',
		color: '#000000',
		margin: '5px',
		textDecoration: 'none',
	},
}));

function LogoutButton() {
	const classes = useStyles();
	const { logout } = useAuth0();

	return (
		<div
			className={classes.login}
			onClick={() => logout({ returnTo: window.location.origin })}
		>
			Logout
		</div>
	);
}

export default LogoutButton;
