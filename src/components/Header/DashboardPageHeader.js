import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";
import { FaSignOutAlt} from "react-icons/fa";
import GetRequest from '../../Service/GetRequest';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';




const DashboardPageHeader = ({activePath}) => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("userid");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userRole = localStorage.getItem("role");

  useEffect (()=>{
      updateAllData();    
  },[])

  const updateAllData = () =>{
    GetRequest("update/all/foods?userId="+localStorage.getItem("userid"))
    .then(response=>{
        if(response){
          console.log("food items and all are updated")
        }
    })
  }
  
  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };


  return (
    <div className='outlet-container'>
        <div className="dashboard-header-container">
            <div className="dashboard-header-name">{activePath}</div>
            <div className="dashboard-action-bar">
                <div className="action-icon" onClick={handleLogout}> <FaSignOutAlt/> </div>
            </div>
        </div>
        <ToastContainer autoClose={false}/>
    </div>
  )
}

export default DashboardPageHeader