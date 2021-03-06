import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AdminEditor, AdminPanel, Article, Landing, AdminLogin } from "../pages";

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/adminEditor" component={AdminEditor} />
				<Route path="/adminPanel" component={AdminPanel} />
				<Route path="/adminLogin" component={AdminLogin} />
				<Route exact path="/article" component={Article} />
				<Route exact path="/" component={Landing} />
			</Switch>
		</Router>
	);
}
