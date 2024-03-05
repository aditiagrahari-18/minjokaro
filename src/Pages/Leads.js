import React, { Component, PropTypes } from "react";
import CommonLayOut from "../components/CommonLayOut";

class Leads extends Component {
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
											<h1 className="m-0">List Of Leads</h1>
										</div>
									</div>
								</div> */}
							</div>
							<section className="content">
								<div className="container-fluid">
									<div className="row">
										<div className="col-12">
											<div className="card">
												<div className="card-header">
													<h3 className="card-title">Leads</h3>
													<div className="card-tools">
														<div
															className="input-group input-group-sm"
															style={{ width: 150 }}
														>
															<input
																type="text"
																name="table_search"
																className="form-control float-right"
																placeholder="Search"
															/>
															<div className="input-group-append">
																<button
																	type="submit"
																	className="btn btn-default"
																>
																	<i className="fas fa-search" />
																</button>
															</div>
														</div>
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

Leads.propTypes = {};

export default Leads;
