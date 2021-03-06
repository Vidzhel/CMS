import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { LoggingPage } from "./pages/Logging";
import { ProfilePage } from "./pages/Profile";
import { BlogPostPage } from "./pages/BlogPost";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./containers/Header";
import styled from "styled-components";
import { connect } from "react-redux";
import { logIn } from "./actions/session";
import { ModalsController } from "./containers/ModalsController";
import { SearchPage } from "./pages/Search";
import { HISTORY } from "./assets/constants";
import { MessagesController } from "./containers/MessagesController";

const StyledContainer = styled.div`
	margin-top: 100px;
	margin-bottom: 50px;
	overflow-wrap: break-word;

	a {
		text-decoration: none;
		color: black;
	}
`;

class App extends React.Component {
	componentDidMount() {
		this.props.logIn(null);
	}

	render() {
		return (
			<Router history={HISTORY}>
				<StyledContainer>
					<ModalsController />
					<MessagesController />
					<Header />
					<Switch>
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
						<Route exact path="/home" component={HomePage} />
						<Route path="/auth" component={LoggingPage} />
						<Route path="/profiles/:verbose" component={ProfilePage} />
						<Route path={"/articles/:verbose"} component={BlogPostPage} />
						<Route path={"/search"} component={SearchPage} />
						<Route path={"/not-found"} component={NotFoundPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</StyledContainer>
			</Router>
		);
	}
}

const mapDispatchToProps = {
	logIn,
};

App = connect(null, mapDispatchToProps)(App);
export default App;
