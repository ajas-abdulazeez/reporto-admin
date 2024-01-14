import React , { useEffect, useState } from 'react'
import GetRequest from '../../Service/GetRequest';
import ReportTableRows from './ReportTableRows';
import "./style.css";


const ReportsTable = () => {



const[reportsList,setreportsList]=useState([]);



  useEffect(() => {
    //eslint-disable-next-line
    FetchAllReports();
  }, []);

  const FetchAllReports = async()=>{
    const authorityId= localStorage.getItem("authorityId");
    await GetRequest("v1/report/fetch/reports?authorityId="+authorityId)
    .then(response=>{
        if(response){
          setreportsList(response)
        }
    })
  }

  
      return (
        <div className="table-with-header-options">
        <div className="table-header-options">
          <div className="table-name">Your Inventory</div>
        </div>
        <div className="table-container">
            <div className="table-header">
                <div className="table-column-title">Sl.no</div>
                <div className="table-column-title">Category</div>
                <div className="table-column-title">Reported Date</div>
                <div className="table-column-title">Location</div>
                <div className="table-column-title">Latitude</div>
                <div className="table-column-title">Longitude</div>
                <div className="table-column-title">Status</div>
                <div className="table-column-title">Actions</div>
            </div>
            <div className="inventory-table-body-content">

            {reportsList === null || reportsList.length === 0 ? (
                          <div className="centralise-content">No Donation items to display.</div>
                        ) : (
                          reportsList.map((item,index) => ( <ReportTableRows key={item.reportId} slno={index + 1} {...item}/> )))}
            </div>
        </div></div>
      )
    }
  
    

export default ReportsTable