import React, { Component, PropTypes } from "react";
import CommonLayOut from "../components/CommonLayOut";
import Pagination from "./Pagination";
import GenericTable from "../Table/GenericTable";

class Leads extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// tableData: null,
		};
	}

	componentWillMount() {}

	componentWillReceiveProps(nextProps) {}

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
		const drivers = [
			{
				id: 1,
				name: "Ashish",
				email: "email@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 2,
				name: "Nilesh",
				email: "email@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 3,
				name: "Suhaan",
				email: "email@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 4,
				name: "Yogesh",
				email: "email@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 5,
				name: "Rihit",
				email: "email@gmail.com",
				contact_number: "0898988989",
			},
			{
				id: 6,
				name: "Anubhav",
				email: "email@gmail.com",
				contact_number: "0898988989",
			},
		];
		return (
			<div>
				<CommonLayOut
					body={
						<div className="content-wrapper">
							<div className="content-header"></div>
							<section className="content">
								<div className="container-fluid">
									<div className="row">
										<div className="col-12">
											<div className="card card-info">
												<div className="card-header">
													<h3 className="card-title">
														New Leads:{" "}
														<span className="badge badge-info right">4</span>
													</h3>
													<div className="card-tools">
														<button
															type="button"
															className="btn btn-tool"
															data-card-widget="collapse"
														>
															<i className="fas fa-minus" />
														</button>
													</div>
												</div>
												<div className="card-body table-responsive p-0">
													<GenericTable
														tableData={tableData}
														dataFor="Leads"
														drivers={drivers}
													/>
													{/* <div className="card-footer clearfix">
														<ul className="pagination pagination-sm m-0 float-right">
															<li className="page-item">
																<a className="page-link" href="#">
																	«
																</a>
															</li>
															<li className="page-item">
																<a className="page-link" href="#">
																	1
																</a>
															</li>
															<li className="page-item">
																<a className="page-link" href="#">
																	2
																</a>
															</li>
															<li className="page-item">
																<a className="page-link" href="#">
																	3
																</a>
															</li>
															<li className="page-item">
																<a className="page-link" href="#">
																	»
																</a>
															</li>
														</ul>
													</div> */}
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

Leads.propTypes = {};

export default Leads;
