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
					backgroundImage: `url(${Background})`,
					width: "100",
					height: "100vh",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundAttachment: "fixed",
					overflow: "hidden",
				}}
			>
				<Card
					className={classes.root}
					style={{
						position: "absolute",
						bottom: "20%",
						left: "5%",
						width: "35%",
						backgroundColor: `rgba(0,0,0,.0)`,
						color: "white",
						maxHeight: "55%",
						overflow: "auto",
					}}
					variant="outlined"
				>
					<CardContent>
						<Typography>
							<h3>
								<b>BrewCrew</b> is your key to finding great breweries.
							</h3>
						</Typography>
					</CardContent>
					<CardActions>
						<Link
							size="small"
							to="/login"
							style={{ textDecoration: "none", color: "violet" }}
						>
							Sign up today
						</Link>
					</CardActions>
				</Card>
			</div>
		</>
	);
}

export default Landing;
