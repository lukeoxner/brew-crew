// *** USER AUTHENTICATION FEATURES NOT USED FOR MVP - WILL BE ADDED IN FUTURE DEVELOPMENT ***

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, makeStyles, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	login: {
		cursor: 'pointer',
		color: '#000000',
		margin: '5px',
		textDecoration: 'none',
	},
}));

function LoginButton() {
	const classes = useStyles();
	const { loginWithRedirect } = useAuth0();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	return (
		<div className={classes.login} onClick={() => loginWithRedirect()}>
			Login
		</div>
	);
}

export default LoginButton;
