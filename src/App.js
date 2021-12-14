import React from "react";
import {
	NavBar,
	FeaturedImage,
	Services,
	About,
	ChatBot,
	Samples,
	CaseStudies,
	Blogs,
	Reviews,
	Contact,
	Footer,
} from "./components/components";
import "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/reports" component={Reports} />
					<Route
						path="/products"
						component={Products}
					/>
				</Switch>
			</Router>
			<FeaturedImage />
			<Services />
			<About />
			<ChatBot />
			<Samples />
			<CaseStudies />
			<Blogs />
			<Reviews />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
