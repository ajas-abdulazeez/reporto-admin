import React from 'react'
import './style.css'

const ReportCards = ({reportId,userId,category,description,location,media,lastActivity,status}) => {
  return (
    <div>
        <div className="card">
            <div className="report-card-image-container"></div>
            <div className="report-card-footer">
                <div className="report-card-title">{category}</div>
                <div className="report-card-created-date">{lastActivity}</div>
                <div className="report-card-location">{location}</div>
            </div>
        </div>
    </div>
  )
}

export default ReportCards