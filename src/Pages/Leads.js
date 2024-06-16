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
		  setleadsDetails(data)
		});
	  };
	  fetchData();
	}, [leadsDetails]);
 
  // const drivers = [
  //   {
  //     id: 1,
  //     name: "Ashish",
  //     email: "email@gmail.com",
  //     contact_number: "0898988989",
  //   },
  //   {
  //     id: 2,
  //     name: "Nilesh",
  //     email: "email@gmail.com",
  //     contact_number: "0898988989",
  //   },
  //   {
  //     id: 3,
  //     name: "Suhaan",
  //     email: "email@gmail.com",
  //     contact_number: "0898988989",
  //   },
  //   {
  //     id: 4,
  //     name: "Yogesh",
  //     email: "email@gmail.com",
  //     contact_number: "0898988989",
  //   },
  //   {
  //     id: 5,
  //     name: "Rihit",
  //     email: "email@gmail.com",
  //     contact_number: "0898988989",
  //   },
  //   {
  //     id: 6,
  //     name: "Anubhav",
  //     email: "email@gmail.com",
  //     contact_number: "0898988989",
  //   },
  // ];
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
                          <span className="badge badge-info right">4</span>
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
                      {leadsDetails && <div className="card-body table-responsive p-0">
                        <GenericTable
                          tableData={leadsDetails}
                          dataFor="Leads"
                        //   drivers={drivers}
                        />
                       
                      </div>}
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
