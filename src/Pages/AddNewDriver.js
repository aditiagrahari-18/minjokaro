import React, { useState } from "react";
import CommonLayOut from "../components/CommonLayOut";

function AddNewDriver() {
	const [formData, setFormData] = useState({
		username: null,
		password: null,
		confirmPassword: null,
		contactNumber: null,
		address: null,
		// panNumber: null,
		// aadharNumber: null,
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length === 0) {
			// Form submission logic here
			console.log("Form submitted successfully!");
		} else {
			setErrors(validationErrors);
		}
	};

	const validateForm = (data) => {
		console.log("validateForm data", data);
		let errors = {};

		if (!data.username) {
			errors.username = "Username is required";
		}

		if (!data.password) {
			errors.password = "Password is required";
		}

		if (data.password !== data.confirmPassword) {
			errors.confirmPassword = "Passwords do not match";
		}

		if (!data.contactNumber) {
			errors.contactNumber = "Contact Number is required";
		}
		if (!data.address) {
			errors.address = "Your Address is required";
		}

		// if (!data.panNumber) {
		// 	errors.panNumber = "PAN is required";
		// }

		// if (!data.aadharNumber) {
		// 	errors.aadharNumber = "Aadhaar Number is required";
		// }

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
																value={formData.username}
																onChange={handleChange}
															/>
															{errors.username && (
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
															/>
															{errors.password && (
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
															/>
															{errors.confirmPassword && (
																<span className="danger">
																	{errors.confirmPassword}
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
																value={formData.contactNumber}
																onChange={handleChange}
															/>
															{errors.contactNumber && (
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
																value={formData.address}
																onChange={handleChange}
															/>
															{errors.address && (
																<span className="danger">{errors.address}</span>
															)}
														</div>
														<div className="form-group">
															<label htmlFor="exampleInput">PAN Number</label>
															<input
																type="text"
																className="form-control"
																id="panNumber"
																placeholder="Enter Your Pan Number"
																value={formData.panNumber}
																onChange={handleChange}
															/>
															{/* {errors.panNumber && (
																<span className="danger">
																	{errors.panNumber}
																</span>
															)} */}
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
																value={formData.aadharNumber}
																onChange={handleChange}
															/>
															{/* {errors.aadharNumber && (
																<span className="danger">
																	{errors.aadharNumber}
																</span>
															)} */}
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
