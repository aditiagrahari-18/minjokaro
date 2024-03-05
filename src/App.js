import logo from "./logo.svg";
import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
	return (
		<div className="wrapper">
			<Router>
				<Link to="/"></Link>
				<Link to="/admindashboard"></Link>
				<Routes>
					<Route path="/" Component={Login}></Route>
					<Route path="/login" Component={Login}></Route>
					<Route path="/admindashboard" Component={AdminDashboard}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
