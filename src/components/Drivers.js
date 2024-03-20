import React, { Component, PropTypes } from "react";
import CommonLayOut from "./CommonLayOut";
import GenericTable from "../Table/GenericTable";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Drivers extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	shouldComponentUpdate(nextProps, nextState) {}

	componentWillUpdate(nextProps, nextState) {}

	componentDidUpdate(prevProps, prevState) {}

	componentWillUnmount() {}

	render() {
		const tableData = [
			{
				id: 1,
				name: "Anne",
				email: "anne@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 2,
				name: "Julie",
				email: "julie@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 3,
				name: "Jhon",
				email: "jhon@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 4,
				name: "Sheetal",
				email: "sheetal@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 5,
				name: "Brush",
				email: "brush@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 6,
				name: "Alisha",
				email: "alisha@gmail.com",
				contact_number: "0898988989",
			},
		];
		return (
			<div>
				<CommonLayOut
					body={
						<div className="content-wrapper">
							<div className="content-header">
								{/* <div className="container-fluid">
									<div className="row mb-2">
										<div className="col-sm-6">
											<h1 className="m-0">Dashboard</h1>
										</div>
									</div>
								</div> */}
							</div>
							<section className="content">
								<div className="container-fluid">
									<div className="row">
										<div className="col-12">
											<div className="card card-info">
												<div className="card-header">
													<h3 className="card-title">Drivers</h3>
													<div className="card-tools">
														<div className="row" style={{ marginRight: 10 }}>
															<div className="col-10">
																<Link
																	type="button"
																	className="btn btn-danger btn-sm"
																	to="/addnewdriver"
																>
																	<span className="blacktext">Add Driver</span>
																</Link>
															</div>
															<div className="col-2">
																<button
																	type="button"
																	className="btn btn-tool"
																	data-card-widget="collapse"
																>
																	<i className="fas fa-minus" />
																</button>
															</div>
														</div>
													</div>
												</div>
												<div className="card-body table-responsive p-0">
													<GenericTable tableData={tableData} dataFor="Drivers">
														{" "}
													</GenericTable>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					}
				/>
			</div>
		);
	}
}

Drivers.propTypes = {};

export default Drivers;
