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
      value: null,
      leadDetails: null,
      driverList: null,
    };
  }

  componentDidMount() {
    const { leadDetails } = this.state;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        washerman_id: 0,
        lead_id: leadDetails && leadDetails.lead_id,
      }),
    };
    fetch("api/Admin/GetUnassignedWaherman", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ driverList: data }));
  }

  togglePopup = (item) => {
    console.log("togglePopup", item);
    return this.setState({ isOpen: true, leadDetails: item });
  };

  initModal = () => {
    return this.setState({ isOpen: false });
  };

  handleSelect = (event) => {
    return this.setState({ value: event.target.value });
  };

  alertDetails = () => {
    const { leadDetails, notify } = this.state;
	const { tableData, dataFor } = this.props;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        washerman_id: 0,
        lead_id: leadDetails && leadDetails.lead_id,
      }),
    };
    fetch("api/Admin/AssignLead", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ driverAssigned: data, notify: true }));
	notify && dataFor == "Leads" && fetch('https://randomuser.me/api/')
	.then(({ results }) => this.setState({ tableData: results }));
  };

  assignLead = () => {
    console.log("Add new driver", this.state);
    this.initModal();
    this.alertDetails();
  };

  render() {
    const { tableData, dataFor } = this.props;
    const { isOpen, notify, driverList, driverAssigned } = this.state;
    console.log(
      "Generic Table Props",
      this.state,
      tableData,
      dataFor,
      driverAssigned
    );
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
            {dataFor === "Leads" && (
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Slot Time</th>
                <th>Close Date</th>
              </tr>
            )}
            {dataFor === "Customers" && (
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Active</th>
                <th>Contact Number</th>
              </tr>
            )}
            {dataFor === "Drivers" && (
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Aadhar Number</th>
                <th>Contact Number</th>
                <th>Pin Code</th>
                <th>Active</th>
              </tr>
            )}
            {dataFor === "SlotMaster" && (
              <tr>
                <th>Slot Order</th>
                <th>Slot Time</th>
                <th>Created Date</th>
                <th>Active</th>
              </tr>
            )}
            {dataFor === "Orders" && (
              <tr>
                <th>Order ID</th>
                <th>Generated Order Id</th>
                <th>Created Date</th>
                <th>Order Complete Date</th>
                <th>Order Status</th>
                <th>Payment Amount</th>
                <th>Payment Date</th>
                <th>Payment Status</th>
                <th>Payment Type</th>
                <th>Transaction Number</th>
                <th>Transaction Via</th>
              </tr>
            )}
          </thead>
          <tbody>
            {dataFor === "Leads" &&
              tableData &&
              tableData.map((item) => (
                <tr key={item.lead_id}>
                  <td>{item.lead_id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.lead_time_slot}</td>
                  <td>{item.lead_close_date}</td>
                  {dataFor === "Leads" && (
                    <td>
                      <button
                        className= {item.is_assigned ? "btn btn-danger" : "btn btn-info"}
                        onClick={this.togglePopup}
                        disabled={item.is_assigned}
                      >
                        {item.is_assigned ? "Assigned" : "Assign"}
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            {dataFor === "Customers" &&
              tableData &&
              tableData.map((item) => (
                <tr key={item.customer_id}>
                  <td>{item.full_name}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.is_active === true
                      ? "Yes"
                      : item.is_active === false
                      ? "No"
                      : ""}
                  </td>
                  <td>{item.mobile_number}</td>
                </tr>
              ))}
            {dataFor === "Drivers" &&
              tableData &&
              tableData.map((item) => (
                <tr key={item.driver_id}>
                  <td>
                    {item.first_name} {item.last_name}{" "}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.address_1}</td>
                  <td>{item.aadhar_number}</td>
                  <td>{item.contact_number}</td>
                  <td>{item.pincode}</td>
                  <td>
                    {item.is_active === true
                      ? "Yes"
                      : item.is_active === false
                      ? "No"
                      : ""}
                  </td>
                </tr>
              ))}

            {dataFor === "SlotMaster" &&
              tableData &&
              tableData.map((item) => (
                <tr key={item.slot_id}>
                  <td>{item.sort_order}</td>
                  <td>{item.slot}</td>
                  <td>{item.created_date}</td>
                  <td>
                    {item.is_active === true
                      ? "Yes"
                      : item.is_active === false
                      ? "No"
                      : ""}
                  </td>
                </tr>
              ))}
            {dataFor === "Orders" &&
              tableData &&
              tableData.map((item) => (
                <tr key={item.order_id}>
                  <td>{item.order_id}</td>
                  <td>{item.generated_order_id}</td>
                  <td>{item.created_date}</td>
                  <td>{item.order_complete_date}</td>
                  <td>{item.order_status}</td>
                  <td>{item.payment_amount}</td>
                  <td>{item.payment_date}</td>
                  <td>{item.payment_status}</td>
                  <td>{item.payment_type}</td>
                  <td>{item.transaction_number}</td>
                  <td>{item.transaction_via}</td>
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
                <div class="form-group">
                  <label>Please Select</label>
                  <select
                    class="form-control select2bs4"
                    onChange={this.handleSelect}
                  >
                    <option selected="selected">--Select--</option>
                    {driverList &&
                      driverList.map((driver) => (
                        <option>
                          {driver.first_name} {driver.last_name}
                        </option>
                      ))}
                  </select>
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
              <Button
                variant="dark"
                onClick={this.assignLead}
                disabled={this.state && !this.state.value}
              >
                Assign
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}
