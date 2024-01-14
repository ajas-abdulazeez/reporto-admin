import React , { useEffect, useState } from 'react'
import './style.css'
import GetRequest from '../Service/GetRequest'
import ReportCards from '../components/cards/ReportCards';


const ReportsPage = ( {setActivePath} ) => {


  const[reportsList,setreportsList]=useState([]);



  useEffect(() => {
    setActivePath("Reports");
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

  const handleCardUpdate = () => {
    // Perform data update logic here
    FetchAllReports();
  };

  return (
    <div className="outlet-container">
      
      <div className="cards-contaier">
      
{reportsList === null || reportsList.length === 0 ? (
                          <div className="centralise-content">
                                <div className="dotted-border-contaner">
                                      <div className="centralise-text">There are no reports.</div>
                                          <br/>      
                                      </div></div>
                        ) : (
                          reportsList.map((reports)=><ReportCards key={reports.id} {...reports}/>)
                        )} 

    </div></div>
  )
}

export default ReportsPage