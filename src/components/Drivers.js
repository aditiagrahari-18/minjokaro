import React, { Component, PropTypes, useEffect, useState } from "react";
import CommonLayOut from "./CommonLayOut";
import GenericTable from "../Table/GenericTable";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Drivers = () => {
  const [driverssDetails, setDriverssDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        process.env.REACT_APP_API_URL + "api/Admin/GetWashermanList"
      );
      result.json().then((data) => {
        setDriverssDetails(data);
      });
    };
    fetchData();
  }, []);
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
                        <h3 className="card-title">Drivers</h3>
                        <div className="card-tools">
                          <div className="row" style={{ marginRight: 10 }}>
                            <div className="col-10">
                              <Link
                                type="button"
                                className="btn btn-danger btn-sm"
                                to="/addnewdriver"
                              >
                                <span className="blacktext">Add Driver</span>
                              </Link>
                            </div>
                            <div className="col-2">
                              <button
                                type="button"
                                className="btn btn-tool"
                                data-card-widget="collapse"
                              >
                                <i className="fas fa-minus" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body table-responsive p-0">
                        {driverssDetails && (
                          <div className="card-body table-responsive p-0">
                            <GenericTable
                              tableData={driverssDetails}
                              dataFor="Drivers"
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
    </div>
  );
};

Drivers.propTypes = {};

export default Drivers;
