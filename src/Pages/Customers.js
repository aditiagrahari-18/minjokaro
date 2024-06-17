import React, { Component, PropTypes, useEffect, useState } from "react";
import CommonLayOut from "../components/CommonLayOut";
import GenericTable from "../Table/GenericTable";

const Customers = () => {
  const [customersDetails, setCustomersDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("api/Admin/GetCustomerList");
      result.json().then((data) => {
        console.log(data);
        setCustomersDetails(data);
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
                        <h3 className="card-title">Customers</h3>
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
                      {customersDetails && (
                        <div className="card-body table-responsive p-0">
                          <GenericTable
                            tableData={customersDetails}
                            dataFor="Customers"
                          />
                        </div>
                      )}
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

Customers.propTypes = {};

export default Customers;
