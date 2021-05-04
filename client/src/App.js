import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Loading from "./components/Loading";

function App() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path={"/"}>
						{isAuthenticated ? <Home /> : <Landing />}
					</Route>
					<Route exact path={"/home"}>
						{/* {isAuthenticated ? <Home /> : <Landing />} */}
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
