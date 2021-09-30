import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AdminEditor, AdminPanel, Article, Landing } from "../pages";

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/adminEditor" component={AdminEditor} />
				<Route path="/adminPanel" component={AdminPanel} />
				<Route exact path="/article/:id" component={Article} />
				<Route exact path="/" component={Landing} />
			</Switch>
		</Router>
	);
}
