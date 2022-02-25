// *** USER AUTHENTICATION FEATURES NOT USED FOR MVP - WILL BE ADDED IN FUTURE DEVELOPMENT ***

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Loading from './components/Loading';
import Search from './pages/Search';
import OurPicks from './pages/OurPicks';

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
					<Route exact path='/' component={Landing} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/profile' component={Profile} />
					<Route exact path='/search' component={Search} />
					<Route exact path='/ourpicks' component={OurPicks} />
					<Route exact path='*' component={Landing} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
