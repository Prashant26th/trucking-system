import React, { useState } from "react";
import { AppBar, Toolbar, Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import TTMaster from "../pages/TTMaster";
import Operation from "../pages/Operation";
import Report from "../pages/Report";
import FMS from "../pages/FMS";
import Tracking from "../pages/Tracking";
import "../styles/home.css";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home-container">
      {/* AppBar */}
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar">
          {/* Sidebar Toggle Button + Company Logo & Name */}
          <div className="left-section">
            <IconButton edge="start" className="menu-button" onClick={toggleSidebar}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <span className="company-name">Satnam Travels</span>
          </div>

          {/* User Icon (With Image) */}
          <div className="right-section">
            <IconButton className="user-icon">
              <Avatar className="user-avatar" src="/Images/satnamLogo.jpg" />
            </IconButton>
          </div>          
        </Toolbar>
      </AppBar>

      {/* Sidebar & Main Content */}
      <div className="main-layout">
        {/* Sidebar (Hidden by default, toggles on click) */}
        <div className={`sidebar-wrapper ${sidebarOpen ? "open" : ""}`}>
          <Sidebar onClick={toggleSidebar} />
        </div>

        {/* Page Content */}
        <div className={`content ${sidebarOpen ? "with-sidebar" : "full-width"}`}>
          <Routes>
            <Route path="/master/tt-master" element={<TTMaster />} />
            <Route path="/operation" element={<Operation />} />
            <Route path="/report" element={<Report />} />
            <Route path="/fms" element={<FMS />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
