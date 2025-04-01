import React, { useState } from "react";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import { NavLink } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "./Sidebar.css";

const Sidebar = ({ onClick }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="sidebar">
      <List component="nav" className="sidebar-list">
        {/* Master Menu with Submenus */}
        <ListItem button onClick={() => toggleMenu("master")} className="sidebar-item">
          <ListItemText primary="Master" />
          {openMenus["master"] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMenus["master"]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="submenu">
            <ListItem button  onClick={() => onClick()} component={NavLink} to="/home/master/tt-master" className="submenu-item">
              <ListItemText primary="TT Master" />
            </ListItem>
            <ListItem button onClick={() => onClick()} component={NavLink} to="/home/master/crew-master" className="submenu-item">
              <ListItemText primary="Crew Master" />
            </ListItem>
          </List>
        </Collapse>

        {/* Other Sidebar Menu Items */}
        <ListItem button onClick={() => {toggleMenu("master"); onClick()}} component={NavLink} to="/home/operation" className="sidebar-item">
          <ListItemText primary="Trips" />
        </ListItem>
        <ListItem button onClick={() => {toggleMenu("master"); onClick()}} component={NavLink} to="/home/report" className="sidebar-item">
          <ListItemText primary="Report" />
        </ListItem>
        <ListItem button onClick={() => {toggleMenu("master"); onClick()}}  component={NavLink} to="/home/fms" className="sidebar-item">
          <ListItemText primary="FMS" />
        </ListItem>
        <ListItem button onClick={() => {toggleMenu("master"); onClick()}}  component={NavLink} to="/home/tracking" className="sidebar-item">
          <ListItemText primary="Tracking" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
