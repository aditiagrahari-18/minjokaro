import React, { Component } from "react";
import "../App.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import AdminDashboard from "./AdminDashboard";
import { Navigate, useNavigate } from "react-router-dom";

const openAdminDashboard = () => {};

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldRedirect: null,
		};
	}
	componentWillUnmount() {
		this.setState((state) => {
			return { shouldRedirect: false };
		});
	}
	render() {
		return (
			<div class="login">
				{/* {!this.state.redirect && <Header />}
				{!this.state.redirect && <Menu />}
				
				{!this.state.redirect && <div class="login-content">} */}
				{/* <Header loggedIn="Yes" />
				<Menu loggedIn="Yes"/> */}
				<div class="login-content">
					<section className="content">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-12">
									<div className="card card-primary">
										<div className="card-header">
											<h3 className="card-title">Login to Minzo</h3>
										</div>

										<form
											id="quickForm"
											onSubmit={() => this.setState({ shouldRedirect: true })}
										>
											<div className="card-body">
												<div className="logo">
													<img
														src="logo-2.png"
														alt="User Avatar"
														class="img-size-15"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="exampleInputEmail1">
														Email address
													</label>
													<input
														type="email"
														name="email"
														className="form-control"
														id="exampleInputEmail1"
														placeholder="Enter email"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="exampleInputPassword1">
														Password
													</label>
													<input
														type="password"
														name="password"
														className="form-control"
														id="exampleInputPassword1"
														placeholder="Password"
													/>
												</div>
												<div className="form-group mb-0">
													<div className="custom-control custom-checkbox">
														<input
															type="checkbox"
															name="terms"
															className="custom-control-input"
															id="exampleCheck1"
														/>
														<label
															className="custom-control-label"
															htmlFor="exampleCheck1"
														>
															I agree to the <a href="#">terms of service</a>.
														</label>
													</div>
												</div>
											</div>

											<div className="card-footer buttonalign">
												<button type="submit" className="btn btn-primary large">
													Login
												</button>
											</div>
										</form>
										{this.state.shouldRedirect ? (
											<Navigate replace to="/admindashboard" />
										) : null}
									</div>
								</div>

								<div className="col-md-6"></div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
