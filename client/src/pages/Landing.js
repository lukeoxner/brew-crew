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
					background:
						"linear-gradient(to bottom, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.55))",
					backgroundImage: `linear-gradient(to left, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.75)), url(${Background})`,
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
						bottom: "20%",
						left: "5%",
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
						}}
					>
						<h3>BrewCrew is your key to finding great breweries.</h3>
					</Typography>
				</Container>
			</div>
		</>
	);
}

export default Landing;
