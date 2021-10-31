import React from "react";
import CounselRoom from "./Pages/CounselRoom";
import CounselPage from "./Pages/CounselPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Homepage";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthRoute from "./utils/authRoute";
import "./Components/style.css";
import { AuthProvider } from "./Context/auth";

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<Navbar />
				<Route exact path='/counsel' component={CounselPage} />
				<Route exact path='/counselroom' component={CounselRoom} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/map' component={Map} />
				<AuthRoute exact path='/register' component={Register} />
				<Route exact path='/' component={Home} />
			</Router>
		</AuthProvider>
	);
}
