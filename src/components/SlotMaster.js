import React, { Component, PropTypes, useEffect, useState } from "react";
import CommonLayOut from "./CommonLayOut";
import GenericTable from "../Table/GenericTable";

const SlotMaster = () => {
  const [slotMasterDetails, setSlotMasterDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("api/Admin/GetSlots");
      result.json().then((data) => {
        console.log(data);
        setSlotMasterDetails(data);
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
                        <h3 className="card-title">Slot Master</h3>
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
    </div>
  );
};

SlotMaster.propTypes = {};

export default SlotMaster;
