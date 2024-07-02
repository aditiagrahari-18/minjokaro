import React, { Component, PropTypes, useEffect, useState } from "react";
import CommonLayOut from "./CommonLayOut";
import GenericTable from "../Table/GenericTable";
import { Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SlotMaster = () => {
  const [slotMasterDetails, setSlotMasterDetails] = useState();
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    slot_time_from: "",
    slot_ampm_from: "",
    slot_time_to: "",
    slot_ampm_to: "",
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const fetchData = async () => {
    const result = await fetch(
      process.env.REACT_APP_API_URL + "api/Admin/GetSlots"
    );
    result.json().then((data) => {
      console.log(data);
      setSlotMasterDetails(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const showAlert = () => {
    setShowSuccessAlert(true);
  };
  const closeAlert = () => {
    setShowSuccessAlert(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const validationErrors = validateForm(formValues);
      if (Object.keys(validationErrors).length === 0) {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "api/Admin/AddSlot",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        fetchData();
        closeModal(); // Close the modal on successful submission
        showAlert(); // Show the success alert
      } else {
        setErrors(validationErrors);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const validateForm = (data) => {
    console.log("validateForm data", data);
    let errors = {};
    if (!data.slot_time_from) {
      errors.slot_time_from = "Required";
    }
    if (!data.slot_ampm_from) {
      errors.slot_ampm_from = "Required";
    }
    if (!data.slot_time_to) {
      errors.slot_time_to = "Required";
    }
    if (!data.slot_ampm_to) {
      errors.slot_ampm_to = "Required";
    }
    return errors;
  };

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
                        <h3 className="card-title">Slot Master</h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-tool btn-danger"
                            // data-card-widget="collapse"
                            onClick={openModal}
                          >
                            Add Slot
                          </button>
                        </div>
                      </div>
                      <div className="card-body table-responsive p-0">
                        {slotMasterDetails && (
                          <div className="card-body table-responsive p-0">
                            <GenericTable
                              tableData={slotMasterDetails}
                              dataFor="SlotMaster"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        }
      />

      {isModalOpen && (
        <Modal show={isModalOpen}>
          <Modal.Header closeButton onClick={closeModal}>
            <Modal.Title>Add Slot</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formTimeFrom">
                    <Form.Label>Time From</Form.Label>
                    <Form.Control
                      as="select"
                      name="slot_time_from"
                      value={formValues.slot_time_from}
                      onChange={handleChange}
                    >
                      <option value="" style={{ display: "none" }}>
                        Select
                      </option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </Form.Control>
                    {!formValues.slot_time_from && (
                      <Form.Label className="danger">
                        {errors.slot_time_from}{" "}
                      </Form.Label>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formTimeFrom">
                    <Form.Label>AM/PM</Form.Label>
                    <Form.Control
                      as="select"
                      name="slot_ampm_from"
                      value={formValues.slot_ampm_from}
                      onChange={handleChange}
                    >
                      <option value="" style={{ display: "none" }}>
                        Select
                      </option>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Form.Control>
                    {!formValues.slot_ampm_from && (
                      <Form.Label className="danger">
                        {errors.slot_ampm_from}{" "}
                      </Form.Label>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formTimeFrom">
                    <Form.Label>Time To</Form.Label>
                    <Form.Control
                      as="select"
                      name="slot_time_to"
                      value={formValues.slot_time_to}
                      onChange={handleChange}
                    >
                      <option value="" style={{ display: "none" }}>
                        Select
                      </option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="5">05</option>
                      <option value="6">06</option>
                      <option value="7">07</option>
                      <option value="8">08</option>
                      <option value="9">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </Form.Control>
                    {!formValues.slot_time_to && (
                      <Form.Label className="danger">
                        {errors.slot_time_to}{" "}
                      </Form.Label>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formTimeTo">
                    <Form.Label>AM/PM</Form.Label>
                    <Form.Control
                      as="select"
                      name="slot_ampm_to"
                      value={formValues.slot_ampm_to}
                      onChange={handleChange}
                    >
                      <option value="" style={{ display: "none" }}>
                        Select
                      </option>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Form.Control>
                    {!formValues.slot_ampm_to && (
                      <Form.Label className="danger">
                        {errors.slot_ampm_to}{" "}
                      </Form.Label>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}

      {showSuccessAlert && (
        <Modal show={showSuccessAlert}>
          <Modal.Header closeButton onClick={closeAlert}>
            <Modal.Title>Congrats!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Slot added successfully</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={closeAlert}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

SlotMaster.propTypes = {};

export default SlotMaster;
