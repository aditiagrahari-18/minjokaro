import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import AdminDashboard from "./AdminDashboard";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // State for error message
  const [error, setError] = useState("");
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    setNavigate(false);
  }, [navigate]);

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "api/SOLogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_name: email, password: password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.is_error) {
          setError(data.message || "Invalid username or password");
        } else {
          setNavigate(true);
        }
        // setNavigate(true);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div class="login">
      <div class="login-content">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Login to Minzo</h3>
                  </div>

                  <form id="quickForm" onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="logo">
                        <img
                          src="logo-2.png"
                          alt="User Avatar"
                          class="img-size-15"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                        />
                        {!email && <div className="danger">Required</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                        {!password && <div className="danger">Required</div>}
                      </div>

                      <div className="form-group">
                        {error && <div className="danger">{error}</div>}
                      </div>
                    </div>
                    <div className="card-footer buttonalign">
                      <button
                        type="submit"
                        className="btn btn-primary large"
                        disabled={!(email && password)}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {navigate && !error.is_error ? (
                    <Navigate replace to="/admindashboard" />
                  ) : null}
                </div>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
