import React, { Component, PropTypes } from "react";
import CommonLayOut from "../components/CommonLayOut";

class Customers extends Component {
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
													<h3 className="card-title">Customers</h3>
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
													<table className="table table-hover text-nowrap">
														<thead>
															<tr>
																<th>ID</th>
																<th>User</th>
																<th>Date</th>
																<th>Status</th>
																<th>Reason</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>183</td>
																<td>John Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-success">
																		Approved
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>219</td>
																<td>Alexander Pierce</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-warning">
																		Pending
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>657</td>
																<td>Bob Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-primary">
																		Approved
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>175</td>
																<td>Mike Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-danger">Denied</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>175</td>
																<td>Mike Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-danger">Denied</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>183</td>
																<td>John Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-success">
																		Approved
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>219</td>
																<td>Alexander Pierce</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-warning">
																		Pending
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>657</td>
																<td>Bob Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-primary">
																		Approved
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>175</td>
																<td>Mike Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-danger">Denied</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>183</td>
																<td>John Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-success">
																		Approved
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>183</td>
																<td>John Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-success">
																		Approved
																	</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
															<tr>
																<td>175</td>
																<td>Mike Doe</td>
																<td>11-7-2014</td>
																<td>
																	<span className="tag tag-danger">Denied</span>
																</td>
																<td>
																	Bacon ipsum dolor sit amet salami venison
																	chicken flank fatback doner.
																</td>
															</tr>
														</tbody>
													</table>
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

Customers.propTypes = {};

export default Customers;
