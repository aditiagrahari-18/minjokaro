import logo from "./logo.svg";
import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard";
import Leads from "./Pages/Leads";
import Customers from "./Pages/Customers";
import Drivers from "./components/Drivers";
import SlotMaster from "./components/SlotMaster";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import AddNewDriver from "./Pages/AddNewDriver"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
	return (
		<div className="wrapper">
			<Router>
				<Link to="/"></Link>
				<Link to="/admindashboard"></Link>
				<Link to="/leads"></Link>
				<Link to="/customers"></Link>
				<Link to="/drivers"></Link>
				<Link to="/slotmaster"></Link>
				<Link to="/orders"></Link>
				<Link to="/addnewdriver"></Link>
				<Routes>
					<Route path="/" Component={Login}></Route>
					<Route path="/login" Component={Login}></Route>
					<Route path="/admindashboard" Component={AdminDashboard}></Route>
					<Route path="/leads" Component={Leads}></Route>
					<Route path="/customers" Component={Customers}></Route>
					<Route path="/drivers" Component={Drivers}></Route>
					<Route path="/slotmaster" Component={SlotMaster}></Route>
					<Route path="/orders" Component={Orders}></Route>
					<Route path="/addnewdriver" Component={AddNewDriver}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
