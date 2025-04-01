import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TruckTable = ({ data, currentPage, entriesPerPage }) => {
  return (
    <TableContainer
      className="table-container"
      style={{
        overflowX: "auto",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflowY: "auto",
        maxHeight: "80vh",
        scrollbarWidth: "thin",
      }}
    >
      <Table>
        <TableHead style={{ background: "#A9A9A9" }}>
          <TableRow className="table-header-row">
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <TableCell
                  key={key}
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    background: "off-white",
                  }}
                  className="table-cell"
                >
                  {key}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(
              (currentPage - 1) * entriesPerPage,
              currentPage * entriesPerPage
            )
            .map((row, index) => (
              <TableRow key={index} className="table-row">
                {Object.values(row).map((value, idx) => (
                  <TableCell
                    className="table-cell"
                    key={idx}
                    style={{ textAlign: "center" }}
                  >
                    {value ? value : "---"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TruckTable;
