import React from "react";
import {
	Grid,
	Card,
	CardActions,
	CardContent,
	Button,
	makeStyles,
	Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Background from "../images/beer-on-beach.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	indent: {
		textIndent: "30px",
	},
});

function Landing() {
	const classes = useStyles();

	return (
		<>
			<div
				container
				style={{
					position: "relative",
					backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.70)), url(${Background})`,
					width: "100",
					height: "100vh",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundAttachment: "fixed",
					overflow: "hidden",
				}}
			>
				<Container
					className={classes.root}
					style={{
						position: "absolute",
						bottom: "30%",
						left: "10%",
						width: "35%",
						maxHeight: "90",
						marginTop: "2rem",
						backgroundColor: `rgba(0,0,0,.0)`,
						color: "white",
						overflow: "hidden",
					}}
				>
					<Typography
						style={{
							fontSize: "2.5rem",
							textShadow: "2px 2px #000000",
							textAlign: "left",
						}}
					>
						<h3>BrewCrew is your key to finding great breweries nearby.</h3>
					</Typography>
					<Button variant="outlined" style={{ borderColor: "#f1a922" }}>
						<Link
							to=""
							style={{
								color: "#f1a922",
								textDecoration: "none",
								fontSize: "1rem",
								position: "relative",
								fontStyle: "italic",
							}}
						>
							Sign Up / Log In
						</Link>
					</Button>
				</Container>
			</div>
		</>
	);
}

export default Landing;
