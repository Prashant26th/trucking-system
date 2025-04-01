import React, { useState, useEffect } from "react";
import { TextField, Grid, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import * as XLSX from "xlsx";
import TruckTable from "../components/TruckTable";
import "./TTMaster.css";

const TruckDetailsForm = () => {
  const fields = [
    "Tanker Number", "Contract Valid From", "Contract Valid TO", "Truck Type", "Contract Type", 
    "Transporter Code", "Vendor Name", "Terminal", "Material Group", "Status of Truck", 
    "Area of Location", "Total Capacity", "Guaranteed KM", "Remarks", "Remarks 1", 
    "Remarks 2", "Cap UOM", "Reason Code", "Created ON", "Created By", 
    "Last Changed By", "Engine Number", "Chassis Number", "Approval Flag", "Eligibility Flag", 
    "Ownership Type", "Carrying Capacity", "Resd Capacity", "Insurance No", "Insurance Dt", 
    "Explosive Lic No", "Explosive Lic Dt", "Safe Valve HY", "Safe Valve FY", "Calib Lic No", 
    "Calib Lic Dt", "Dip Level 1", "Proof Level 1", "Dip Level 2", "Proof Level 2", 
    "Dip Level 3", "Proof Level 3", "Dip Level 4", "Proof Level 4", "Dip Level 5", "Proof Level 5"
  ];

  return (
    <Grid container spacing={2}>
      {fields.map((field, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <TextField
            fullWidth
            label={field}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  );
};

const TTMaster = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("TTMasterData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const entriesPerPage = 12;
  const totalPages = Math.ceil(data.length / entriesPerPage);

  useEffect(() => {
    localStorage.setItem("TTMasterData", JSON.stringify(data));
  }, [data]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      setData(jsonData);
    };
    reader.readAsBinaryString(file);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="title">TT Master</h2>
          <div
            className="button-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a href="/path/to/template.xlsx" download>
                <Button variant="contained" color="secondary">
                  Download Template
                </Button>
              </a>
              <div style={{ marginLeft: "10px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                >
                  ADD
                </Button>
                <input
                  accept=".xlsx, .xls"
                  style={{ display: "none" }}
                  id="upload-button-file"
                  type="file"
                  onChange={handleFileUpload}
                />
                <label htmlFor="upload-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    style={{ marginLeft: "10px" }}
                  >
                    Upload
                  </Button>
                </label>
              </div>
            </div>
          </div>
        </div>
        {data.length > 0 && (
          <TruckTable data={data} currentPage={currentPage} entriesPerPage={entriesPerPage} />
        )}
      </div>
      {data.length > 0 && (
        <div className="pagination" style={{ textAlign: "center" }}>
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            {"<"}
          </Button>
          <span>{currentPage}</span>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
            {">"}
          </Button>
        </div>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add truck details</DialogTitle>
        <DialogContent>
          <TruckDetailsForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TTMaster;