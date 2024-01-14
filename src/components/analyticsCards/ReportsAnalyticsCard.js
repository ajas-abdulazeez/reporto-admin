import React, { useEffect, useState } from 'react'
import GetRequest from '../../Service/GetRequest';

const ReportsAnalyticsCard = () => {


    const [openReportCount, setopenReport] =useState();
    const [pendingReportCount, setpendingReport] =useState();
    const [closedReportCount, setclosedReportCount] =useState();


    useEffect(()=>{
      const authorityId= localStorage.getItem("authorityId");
        GetRequest("v1/report/fetch/authorities/analysis?authorityId?="+authorityId)
        .then(response=>{
            if(response){
              setopenReport(response.open)
              setpendingReport(response.pending)
              setclosedReportCount(response.closed)
            }
        })
    },[])
  return (
    <div>
        <div className="food-status-quick-info-container">
              <h4>Reports Status</h4><br/>
            <div className="area-flex"><div className="info-small-box green-box"></div> <div className="info-text"> Open: <span class="bold-text">{openReportCount}</span></div></div>
            <div className="area-flex"><div className="info-small-box"></div><div className="info-text"> Reviewing: <span class="bold-text">{pendingReportCount}</span></div></div>
            <div className="area-flex"><div className="info-small-box red-box"></div><div className="info-text">Closed: <span class="bold-text">{closedReportCount}</span></div></div>
            </div>
    </div>
  )
}

export default ReportsAnalyticsCard