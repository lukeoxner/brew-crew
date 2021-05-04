import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountThumbnail from "./AccountThumbnail";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const { isAuthenticated } = useAuth0();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderAuthMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				<Link
					to=""
					style={{
						color: "#000000",
						textDecoration: "none",
						margin: "5px",
					}}
				>
					Profile
				</Link>
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<LogoutButton />
			</MenuItem>
		</Menu>
	);
	const renderUnauthMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				<LoginButton />
			</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	return (
		<div className={(classes.grow, classes.toolbar)}>
			<AppBar
				position="fixed"
				style={{
					backgroundColor: "#000000",
				}}
			>
				<Toolbar>
					<Link
						to="/"
						style={{
							color: "#ffffff",
							textDecoration: "none",
						}}
					>
						<Typography
							className={classes.title}
							variant="h5"
							noWrap
							style={{
								fontFamily: "Zen Dots",
							}}
						>
							BrewCrew
						</Typography>
					</Link>
					<div className={classes.grow} />
					<div
						className={classes.sectionDesktop}
						style={{
							alignItems: "center",
						}}
					>
						<Link
							to=""
							style={{
								color: "#ffffff",
								textDecoration: "none",
								marginRight: "2rem",
								fontWeight: "500",
								fontSize: "1.2rem",
							}}
						>
							Search
						</Link>
						<Link
							to=""
							style={{
								color: "#ffffff",
								textDecoration: "none",
								marginRight: "2rem",
								fontWeight: "500",
								fontSize: "1.2rem",
							}}
						>
							Our Picks
						</Link>
						<Link
							to=""
							style={{
								color: "#ffffff",
								textDecoration: "none",
								marginRight: "2rem",
								fontWeight: "500",
								fontSize: "1.2rem",
							}}
						>
							About
						</Link>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountThumbnail />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{isAuthenticated ? renderAuthMenu : renderUnauthMenu}
		</div>
	);
}
