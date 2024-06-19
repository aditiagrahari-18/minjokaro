import React, { useState } from "react";
import CommonLayOut from "../components/CommonLayOut";

function AddNewDriver() {
  const [formData, setFormData] = useState({
    user_name: null,
    password: null,
    confirmPassword: null,
    contact_number: null,
    address_1: null,
    fullname: null,
    // panNumber: null,
    aadhar_number: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
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
      alert("User added successfully.");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    console.log("validateForm data", data, data.contact_number.length);
    let errors = {};

    if (!data.user_name) {
      errors.username = "Username is required";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!data.contact_number || data.contact_number.length !== 10) {
      !data.contact_number
        ? (errors.contactNumber = "Contact Number is required")
        : (errors.contactNumber = "Incorrect Mobile Number");
    }

    if (!data.address_1) {
      errors.address = "Your Address is required";
    }

    // if (!data.panNumber) {
    // 	errors.panNumber = "PAN is required";
    // }

    if (!data.aadhar_number) {
      console.log("16");
      errors.aadharNumber = "Aadhaar Number is required";
    }

    return errors;
  };
  console.log("Form Data Errors", errors);
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
                             {(!formData.contact_number || formData.contact_number.length != 10 ) && (
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
                                type="text"
                                className="form-control"
                                id="aadharNumber"
                                placeholder="Enter Your Aadhaar Number"
                                value={formData.aadhar_number}
                                onChange={handleChange}
                                name="aadhar_number"
                              />
                            </div>
                          </div>
                          <div className="card-footer">
                            <button type="submit" className="btn btn-info">
                              Submit
                            </button>
                          </div>
                        </form>
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

export default AddNewDriver;
