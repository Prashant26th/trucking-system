import React, { useState, useEffect } from "react";
import { TextField, Grid, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem } from "@mui/material";
import TruckTable from "../components/TruckTable"; // Import TruckTable from TruckTable.js
import "./TTMaster.css";
import { DatePicker } from "@mui/lab"; // Ensure you have @mui/lab installed

const TripDetailsForm = ({ formData, setFormData }) => {
  const truckNumbers = ["Truck1", "Truck2", "Truck3"]; // Replace with actual truck numbers
  const cities = ["City1", "City2", "City3"]; // Replace with actual city names
  const businessModes = ["Retail", "ATF", "IM", "Ethanol"];
  const products = ["HSD", "MS", "AIF", "Ethanol"];
  const capacities = [12, 14, 18, 19, 20, 22, 23, 24, 25, 27, 28, 29, 30, 34, 35, 40];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Grid container spacing={3} className="form-container" style={{ padding: "20px", flexDirection: "column" }}>
      {/* Row 1 */}
      <Grid container item spacing={1} alignItems="center" height={"100%"}>
        <Grid item xs={6} className="form-row">
          <label>TTNo.</label>
          <TextField
            select
            style={{ width: "200px", height: "100%" }}
            variant="outlined"
            value={formData.ttNo || ""}
            onChange={(e) => handleChange("ttNo", e.target.value)}
          >
            {truckNumbers.map((truck, index) => (
              <MenuItem key={index} value={truck}>
                {truck}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} className="form-row">
          <label>DCPI/Billing No.</label>
          <TextField
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.billingNo || ""}
            onChange={(e) => handleChange("billingNo", e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Row 2 */}
      <Grid container item spacing={1} alignItems="center">
        <Grid item xs={6} className="form-row">
          <label>Business Mode</label>
          <TextField
            select
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.businessMode || ""}
            onChange={(e) => handleChange("businessMode", e.target.value)}
          >
            {businessModes.map((mode, index) => (
              <MenuItem key={index} value={mode}>
                {mode}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} className="form-row">
          <label>Product</label>
          <TextField
            select
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.product || ""}
            onChange={(e) => handleChange("product", e.target.value)}
          >
            {products.map((product, index) => (
              <MenuItem key={index} value={product}>
                {product}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Row 3 */}
      <Grid container item spacing={1} alignItems="center">
        <Grid item xs={6} className="form-row">
          <label>Billing Date</label>
          <TextField
            type="date"
            style={{ width: "200px" }}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={formData.billingDate || ""}
            onChange={(e) => handleChange("billingDate", e.target.value)}
          />
        </Grid>
        <Grid item xs={6} className="form-row">
          <label>From</label>
          <TextField
            select
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.from || ""}
            onChange={(e) => handleChange("from", e.target.value)}
          >
            {cities.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Row 4 */}
      <Grid container item spacing={1} alignItems="center">
        <Grid item xs={6} className="form-row">
          <label>To</label>
          <TextField
            select
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.to || ""}
            onChange={(e) => handleChange("to", e.target.value)}
          >
            {cities.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} className="form-row">
          <label>RTKM</label>
          <TextField
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.rtkm || ""}
            onChange={(e) => handleChange("rtkm", e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Row 5 */}
      <Grid container item spacing={1} alignItems="center">
        <Grid item xs={6} className="form-row">
          <label>Capacity</label>
          <TextField
            select
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.capacity || ""}
            onChange={(e) => handleChange("capacity", e.target.value)}
          >
            {capacities.map((capacity, index) => (
              <MenuItem key={index} value={capacity}>
                {capacity}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} className="form-row">
          <label>Toll</label>
          <TextField
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.toll || ""}
            onChange={(e) => handleChange("toll", e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Row 6 */}
      <Grid container item spacing={1} alignItems="center">
        <Grid item xs={6} className="form-row">
          <label>TT Mileage</label>
          <TextField
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.ttMileage || ""}
            onChange={(e) => handleChange("ttMileage", e.target.value)}
          />
        </Grid>
        <Grid item xs={6} className="form-row">
          <label>Driver Expense</label>
          <TextField
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.driverExpense || ""}
            onChange={(e) => handleChange("driverExpense", e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Row 7 */}
      <Grid container item spacing={1} alignItems="center">
        <Grid item xs={6} className="form-row">
          <label>POD Shortage</label>
          <TextField
            style={{ width: "200px" }}
            variant="outlined"
            value={formData.podShortage || ""}
            onChange={(e) => handleChange("podShortage", e.target.value)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const Operation = () => {
  const [data, setData] = useState(() => {
    // Retrieve data from local storage on initial load
    const savedData = localStorage.getItem("truckTableData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const entriesPerPage = 12;
  const totalPages = Math.ceil(data.length / entriesPerPage);

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
    setFormData({}); // Reset form data
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const updatedData = [...data, formData];
    setData(updatedData); // Add form data to the table
    localStorage.setItem("truckTableData", JSON.stringify(updatedData)); // Save updated data to local storage
    handleClose();
  };

  useEffect(() => {
    // Ensure data is saved to local storage only when it changes
    if (data.length > 0) {
      localStorage.setItem("truckTableData", JSON.stringify(data));
    }
  }, [data]);

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
          <h2 className="title">Trips</h2>
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
              <div style={{ marginLeft: "10px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                >
                  Add trips
                </Button>
              </div>
            </div>
          </div>
        </div>
        {data.length > 0 && (
          <TruckTable
            data={data}
            currentPage={currentPage}
            entriesPerPage={entriesPerPage}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        )}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg" // Make the dialog wider
        fullWidth
      >
        <DialogTitle style={{ boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.2)" }}>Add truck details</DialogTitle>
        <DialogContent
          style={{
            overflowY: "auto",
            maxHeight: "600px", // Adjust the height as needed
          }}
          className="dialog-content"
        >
          <TripDetailsForm formData={formData} setFormData={setFormData} />
        </DialogContent>
        <DialogActions style={{ boxShadow: "0px -4px 6px -2px rgba(0, 0, 0, 0.2)" }}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Operation;