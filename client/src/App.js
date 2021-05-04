import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path={"/"}>
						{isAuthenticated ? <Home /> : <Landing />}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
