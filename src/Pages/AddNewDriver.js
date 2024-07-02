import React, { useEffect, useState } from "react";
import CommonLayOut from "../components/CommonLayOut";
import { Navigate } from "react-router-dom";
import { Modal, Button, Alert, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

function AddNewDriver() {
  const [formData, setFormData] = useState({
    user_name: null,
    password: null,
    confirmPassword: null,
    contact_number: null,
    address_1: null,
    fullname: null,
    aadhar_number: null,
  });
  const [currentFormDataForEdit, setcurrentFormDataForEdit] = useState({
    user_name: null,
    password: null,
    confirmPassword: null,
    contact_number: null,
    address_1: null,
    fullname: null,
    aadhar_number: null,
  });

  const [errors, setErrors] = useState({});
  const [notify, setNotify] = useState(false);
  const [addDriver, setAddDriver] = useState(false);
  const [redirectToDriverPage, setRedirectToDriverPage] = useState(false);
  const location = useLocation();
  const { from, driverDetails } = location.state ? location.state : "";
  // console.log("useLocation", driverDetails, from);

  useEffect(() => {
    // Fetch data from API when component mounts
    if (driverDetails) {
      console.log("driverDetails", driverDetails.washerman_id);
      fetch(process.env.REACT_APP_API_URL + "api/Admin/GetWashermanList")
        .then((response) => response.json())
        .then((data) => {
          const processedItems = data.map((item) => {
            console.log("item", item.washerman_id);
            if (item.washerman_id === driverDetails.washerman_id) {
              console.log("Final item", item);
              setFormData(item);
              setcurrentFormDataForEdit(item);
            }
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // setLoading(false);
        });
    } else {
      setAddDriver(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
    const validationErrors = validateForm(formData, driverDetails);
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit formdata", formData, currentFormDataForEdit);
    const validationErrors = validateForm(formData);
    console.log("validationErrors", validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (addDriver) {
        console.log("currentFormDataForEdit2222");
        const response = await fetch(
          process.env.REACT_APP_API_URL + "api/Admin/AddWasherman",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (response.ok) {
          setNotify(true);
        }
      } else {
        console.log("currentFormDataForEdit", currentFormDataForEdit.length);
        const response = await fetch(
          process.env.REACT_APP_API_URL + "api/Admin/UpdateWashermanDetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (response.ok) {
          console.log("response", response.ok);
          setNotify(true);
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };
  const closeAlert = () => {
    setNotify(false);
    setRedirectToDriverPage(true);
  };

  const validateForm = (data) => {
    console.log("validateForm data", data);
    let errors = {};

    if (!data.user_name) {
      errors.username = "Username is required";
    }

    if (!data.password && addDriver) {
      errors.password = "Password is required";
    }

    if (data.password !== data.confirmPassword && addDriver) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!data.contact_number || data.contact_number.length != 10) {
      !data.contact_number
        ? (errors.contactNumber = "Contact Number is required")
        : (errors.contactNumber = "Incorrect Mobile Number");
    }

    if (!data.address_1) {
      errors.address = "Your Address is required";
    }

    if (data.aadhar_number && data.aadhar_number.length != 12) {
      errors.aadhar_number =
        "Incorrect Aadhaar Number, Please enter correct 12 digit aadhaar number";
    }

    return errors;
  };

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
                        <h3 className="card-title">Please fill details: </h3>
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
                        <form onSubmit={handleSubmit}>
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="exampleInput">Username</label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInput"
                                placeholder="Enter Username"
                                value={formData.user_name}
                                onChange={handleChange}
                                name="user_name"
                              />
                              {!formData.user_name && (
                                <span className="danger">
                                  {errors.username}
                                </span>
                              )}
                            </div>

                            {addDriver && (
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  name="password"
                                />
                                {!formData.password && (
                                  <span className="danger">
                                    {errors.password}
                                  </span>
                                )}
                              </div>
                            )}
                            {addDriver && (
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword2">
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword2"
                                  placeholder="Confirm Password"
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  name="confirmPassword"
                                />
                                {!formData.confirmPassword && (
                                  <span className="danger">
                                    {errors.confirmPassword}
                                  </span>
                                )}
                              </div>
                            )}

                            <div className="form-group">
                              <label htmlFor="exampleInput">Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="Enter fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                name="fullname"
                              />
                              {!formData.fullname && (
                                <span className="danger">
                                  {errors.fullname}
                                </span>
                              )}
                            </div>

                            <div className="form-group">
                              <label htmlFor="exampleInput">
                                Contact Number
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="contactNumber"
                                placeholder="Enter Contact Number"
                                value={formData.contact_number}
                                onChange={handleChange}
                                name="contact_number"
                              />
                              {(!formData.contact_number ||
                                formData.contact_number.length != 10) && (
                                <span className="danger">
                                  {errors.contactNumber}
                                </span>
                              )}
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInput">Full Address</label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Enter Your Full Address"
                                value={formData.address_1}
                                onChange={handleChange}
                                name="address_1"
                              />
                              {!formData.address_1 && (
                                <span className="danger">{errors.address}</span>
                              )}
                            </div>

                            <div className="form-group">
                              <label htmlFor="exampleInput">
                                Aadhaar Number
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="aadharNumber"
                                placeholder="Enter Your Aadhaar Number"
                                value={formData.aadhar_number}
                                onChange={handleChange}
                                name="aadhar_number"
                              />
                              {formData.aadhar_number &&
                                formData.aadhar_number.length != (12 || 0) && (
                                  <span className="danger">
                                    {errors.aadhar_number}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className="card-footer">
                            <button type="submit" className="btn btn-info">
                              Submit
                            </button>
                          </div>
                        </form>
                        {redirectToDriverPage ? (
                          <Navigate replace to="/drivers" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        }
      />

      {notify && (
        <Modal show={notify}>
          <Modal.Header closeButton onClick={closeAlert}>
            <Modal.Title>Congrats!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {addDriver
              ? "Washerman added successfully"
              : "Washerman details Updated"}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={closeAlert}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default AddNewDriver;
