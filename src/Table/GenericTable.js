import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default class GenericTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			notify: false,
		};
	}

	togglePopup = (item) => {
		console.log("togglePopup", item);
		return this.setState({ isOpen: true });
	};
	initModal = () => {
		return this.setState({ isOpen: false });
	};

	alertDetails = () => {
		this.setState({ notify: true });
	};

	assignLead = () => {
		this.initModal();
		this.alertDetails();
	};

	render() {
		const { tableData, drivers } = this.props;
		const { isOpen, notify } = this.state;
		return (
			<div>
				{notify && (
					<Stack sx={{ width: "100%" }}>
						<Alert
							severity="success"
							className="bg-success"
							onClose={() => {
								this.setState({ notify: false });
							}}
						>
							Congrats! Lead Assigned Successfully.
						</Alert>
					</Stack>
				)}
				<table className="table table-hover text-nowrap">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Contact Number</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.contact_number}</td>
								<td>
									<button
										className="btn btn-primary"
										onClick={this.togglePopup}
									>
										Assign
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{isOpen && (
					<Modal show={isOpen}>
						<Modal.Header closeButton onClick={this.initModal}>
							<Modal.Title>Please Assign Lead</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className="nav-item dropdown">
								<a
									className="nav-link bg-success dropdown-toggle"
									data-toggle="dropdown"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Please Select Driver
								</a>
								<div className="dropdown-menu mt-0">
									{drivers.map((driver) => (
										<a
											className="dropdown-item"
											href="#"
											data-widget="iframe-close"
											data-type="all"
										>
											{driver.name}
										</a>
									))}
								</div>
							</div>
							<br />
							<strong>
								Are you sure want to Assign? Please click on assign button below
							</strong>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="danger" onClick={this.initModal}>
								Close
							</Button>
							<Button variant="dark" onClick={this.assignLead}>
								Assign
							</Button>
						</Modal.Footer>
					</Modal>
				)}
			</div>
		);
	}
}
