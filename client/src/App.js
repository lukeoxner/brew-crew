import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path={"/"}>
						<Landing />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
