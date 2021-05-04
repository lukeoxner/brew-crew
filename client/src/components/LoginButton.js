import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, makeStyles, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	login: {
		cursor: "pointer",
		color: "#ffffff",
		margin: "5px",
		textDecoration: "none",
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
		<Link className={classes.login} onClick={() => loginWithRedirect()}>
			Login
		</Link>
	);
}

export default LoginButton;
