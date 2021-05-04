import React from "react";
import { Box, Container } from "@material-ui/core";
const loadingImg =
	"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
	<Box
		style={{
			position: "absolute",
			left: "45%",
			top: "40%",
			alignItems: "center",
			justifyContent: "center",
			width: "100",
		}}
	>
		<Container style={{ width: "100" }}>
			<div className="spinner">
				<img src={loadingImg} alt="Loading..." />
			</div>
		</Container>
	</Box>
);

export default Loading;
