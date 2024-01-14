import React, { useEffect, useState } from 'react'
import GetRequest from '../../Service/GetRequest';

const ResponsibilityOverViewCard = () => {

  const[authoritiesList,setAuthoritiesList]=useState([]);



  useEffect(() => {
    //eslint-disable-next-line
    FetchMyAuthorities();
  }, []);

  const FetchMyAuthorities = async()=>{
    const authorityId= localStorage.getItem("authorityId");
    await GetRequest("v1/report/fetch/authorities?authorityId="+authorityId)
    .then(response=>{
        if(response){
          setAuthoritiesList(response)
        }
    })
  }

  return (
    <div>
        <div className="food-status-quick-info-container">
              <h4>Authority</h4><br/>

              {authoritiesList === null || authoritiesList.length === 0 ? (
                          <div className="centralise-content">
                                <div className="dotted-border-contaner">
                                      <div className="centralise-text">No Authorities Found.</div>
                                          <br/>      
                                      </div></div>
                        ) : (
                          authoritiesList.map((authorities)=>
            <div className="authorities-card">
              <div className="info-small-box green-box"></div>
              <div className="authoity-overview-name">{authorities.roadName}</div>
              <div className="report-coverage-area">{authorities.landmark}</div>
            </div>)
                        )} 
     </div>
    </div>
  )
}

export default ResponsibilityOverViewCard