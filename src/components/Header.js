import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   newLeadCount: null,
    // };
  }

  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/login" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
           
          </ul> */}
        </nav>
      </div>
    );
  }
}
