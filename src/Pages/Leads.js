import React, { Component, useState, useEffect } from "react";
import CommonLayOut from "../components/CommonLayOut";
import Pagination from "./Pagination";
import GenericTable from "../Table/GenericTable";

const Leads = () => {
  const [leadsDetails, setleadsDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("api/Admin/GetAllLeads");
      result.json().then((data) => {
        console.log(data);
        setleadsDetails(data);
      });
    };
    fetchData();
  }, []);

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
                        <h3 className="card-title">
                          New Leads:{" "}
                          <span className="badge badge-info right">2</span>
                        </h3>
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
                      {leadsDetails && (
                        <div className="card-body table-responsive p-0">
                          <GenericTable
                            tableData={leadsDetails}
                            dataFor="Leads"
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

export default Leads;
