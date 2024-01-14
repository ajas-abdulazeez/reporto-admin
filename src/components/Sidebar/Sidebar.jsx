import React from 'react'

import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaEye, FaPenAlt, FaPenNib, FaPencilAlt } from 'react-icons/fa';

const Sidebar = ({ activePath }) => {
  const navigate = useNavigate();
  const authorityId= localStorage.getItem("authorityId");
  const authorityName= localStorage.getItem("authorityName");




  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  return (
    <div>
    <div className="sidebar">

          <div className="top_section" >
                   <h4 style={{display: "block", alignItems: "center"}} className="logo" >REPORTO</h4>
          </div>


          <div class="user-data-centered">
              <div className="profile-icon"></div>
              <div className="authority-name">{authorityName}</div>
              <div className="authority_id">{authorityId}</div>
         </div>

<div>
      <div className={`sidebar-menu ${activePath === "Dashboard" ? "sidebar-menu-select" : ""}`} onClick={() => { navigate("/");}}>
          Dashboard
      </div>
      <div className={`sidebar-menu ${activePath === "Inventory" ? "sidebar-menu-select" : ""}`} onClick={() => {navigate("/reports");}}>
          Reports
      </div>
     
      

      
      <br/>
      <br/>
      <br/>
      <div className="sidebar-footer-container">
          <div className="sidebar-logout-btn" onClick={handleLogout}>Logout</div>
          <div className="small-footer-text">Reporto</div>
      </div>

    </div>  </div>  
    </div>
  );
};

export default Sidebar;
