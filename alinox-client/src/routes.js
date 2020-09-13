import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import MainLayout from "./layouts/MainLayout";
import Report from "./components/Report";
import Anilox from "./components/Anilox";
import History from "./components/History";
import About from "./components/About";
import Settings from "./components/Settings";
import Register from "./components/Register";
import Guide from "./components/Guide";

function MyRouter() {

	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>

				<Route>
					<MainLayout>
						<Switch>
							<Route path="/" exact component={Home}/>
							<Route path="/guides" exact component={Guide}/>
							<Route path="/report/:reportId" component={Report}/>
							<Route path="/anilox" component={Anilox}/>
							<Route path="/history" component={History}/>
							<Route path="/about" component={About}/>
							<Route path="/settings" component={Settings}/>
						</Switch>
					</MainLayout>
				</Route>
			</Switch>
		</Router>
	);
}

export default MyRouter;